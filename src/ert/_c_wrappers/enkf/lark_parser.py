import datetime
import os
import os.path
import shutil
import warnings
from typing import Any, Dict, Iterable, List, Mapping, Optional, Tuple, Union

from lark import Lark, Token, Tree, UnexpectedCharacters

from ert._c_wrappers.config import ConfigValidationError, ConfigWarning
from ert._c_wrappers.enkf.config_keywords import (
    CONFIG_DEFAULT_ARG_MAX,
    CONFIG_DEFAULT_ARG_MIN,
    SchemaItem,
    SchemaType,
    init_site_config,
    init_user_config,
)

grammar = r"""
WHITESPACE: (" "|"\t")+
%ignore WHITESPACE

%import common.CNAME
%import common.SIGNED_NUMBER    -> NUMBER
%import common.NEWLINE          -> NEWLINE


_STRING_INNER: /.+?/
_STRING_ESC_INNER: _STRING_INNER /(?<!\\)(\\\\)*?/

STRING: "\"" _STRING_ESC_INNER "\"" | "'" _STRING_ESC_INNER "'"

DIGIT: "0".."9"
LCASE_LETTER: "a".."z"
UCASE_LETTER: "A".."Z"

LETTER: UCASE_LETTER | LCASE_LETTER
WORD: LETTER+

CHAR: /[&$\[\]=,.\*a-zæøåA-ZÆØÅ10-9_%:\<\>\/-]/
UNQUOTED: CHAR+

CHAR_NO_EQ: /[ +.\*a-zæøåA-ZÆØÅ10-9_%:\<\>\/-]/
UNQUOTED_NO_EQ: /(?!([ ]))/ CHAR_NO_EQ+

CHAR_KW: /[a-zæøåA-ZÆØÅ10-9_:-]/
UNQUOTED_KW: CHAR_KW+
ENV_STRING: "$" UNQUOTED_NO_EQ

arg: NUMBER | STRING | UNQUOTED
arglist: UNQUOTED kw_list

kw_list: "(" [ kw_pair ("," kw_pair)*] ")"
kw_val: NUMBER | UNQUOTED_NO_EQ | STRING | ENV_STRING
kw_pair: KW_NAME "=" kw_val
KW_NAME_STRICT: "<" UNQUOTED_KW ">"
KW_NAME: UNQUOTED_KW | "<" KEYWORD_NAME ">"

COMMENT: /--.*/ NEWLINE

KEYWORD_NAME: /(?!(INCLUDE|DATA_KW|DEFINE))/ LETTER (LETTER | DIGIT | "_" | "-" | "<" | ">" )*

start: instruction+

inst: "DEFINE" KW_NAME kw_val -> define
    | "DATA_KW" KW_NAME kw_val -> data_kw
    | "INCLUDE" arg* -> include
    | KEYWORD_NAME (arg* | arglist) -> keyword

instruction: inst COMMENT | COMMENT | inst NEWLINE | NEWLINE
"""  # noqa: E501


def substitute(
    defines: Iterable[Tuple[str, str]], string: str, expand_env: bool = True
):
    prev = None
    current = string
    if expand_env:
        for key, val in os.environ.items():
            current = current.replace(f"${key}", val)
    n = 0
    while defines and prev != current and n < 100:
        n = n + 1
        for key, val in defines:
            prev = current
            current = current.replace(key, str(val))

    if n >= 100:
        print(f"reached max iterations for {string}")

    if isinstance(current, Token):
        current = current.value

    return current


class _TreeToDictTransformer:
    def __init__(
        self,
        config_file: str,
        config_dir: str,
        config_file_base: str,
        add_invalid: bool = False,
    ):
        self.defines = []
        self.data_kws = []
        self.keywords: List[List[Token]] = []
        self.config_dict = None
        self.add_invalid = add_invalid
        self.config_dir = config_dir
        self.config_file_base = config_file_base
        self.config_file = config_file

    def __call__(self, tree: Tree, site_config: Optional[Dict[str, Any]] = None):
        schema: Mapping[str, SchemaItem] = (
            init_user_config() if site_config is not None else init_site_config()
        )

        self.defines.append(["<CONFIG_PATH>", self.config_dir])
        self.defines.append(["<CONFIG_FILE_BASE>", self.config_file_base])
        self.defines.append(["<DATE>", datetime.date.today().isoformat()])
        self.schema = schema
        self.config_dict = {} if not site_config else site_config
        for node in tree.children:
            if isinstance(node, Tree) and node.data == "instruction":
                if isinstance(node.children[0], Token):
                    pass  # newline or comment
                elif node.children[0].data == "define":
                    self.define(node.children[0])
                elif node.children[0].data == "data_kw":
                    self.data_kw(node.children[0])
                elif node.children[0].data == "keyword":
                    self.keyword(node.children[0])
                elif node.children[0].data == "include":
                    self.include(node.children[0])

        def check_valid(val, item: SchemaItem, index: int):
            if index in item.indexed_selection_set:
                if val not in item.indexed_selection_set[index]:
                    raise ConfigValidationError(
                        f"{item.kw!r} argument {index!r} must be one of"
                        f" {item.indexed_selection_set[index]!r}"
                    )

        def convert(val, item: SchemaItem, index: int):
            check_valid(val, item, index)
            if not len(item.type_map) > index:
                return val
            val_type = item.type_map[index]
            if val_type is None:
                return val
            if val_type == SchemaType.CONFIG_INT:
                try:
                    return int(val)
                except ValueError:
                    raise ConfigValidationError(
                        f"{item.kw!r} must have an integer value"
                        f" as argument {index + 1!r}"
                    ) from None
            if val_type == SchemaType.CONFIG_FLOAT:
                try:
                    return float(val)
                except ValueError:
                    raise ConfigValidationError(
                        f"{item.kw!r} must have a number as argument {index + 1!r}"
                    ) from None
            if val_type in [SchemaType.CONFIG_PATH, SchemaType.CONFIG_EXISTING_PATH]:
                path = val
                if not os.path.isabs(val):
                    path = os.path.normpath(os.path.join(self.config_dir, val))
                if val_type == SchemaType.CONFIG_EXISTING_PATH and not os.path.exists(
                    path
                ):
                    err = f'Cannot find file or directory "{val}" \n'
                    if path != val:
                        err += f"The configured value was {path!r} "
                    raise ConfigValidationError(err)
                return path
            if val_type == SchemaType.CONFIG_EXECUTABLE:
                path = val
                if not os.path.isabs(val) and not os.path.exists(val):
                    path = shutil.which(val)
                    if path is None:
                        raise ConfigValidationError(
                            f"Could not find executable {val!r}"
                        )
                return path
            return val

        def with_types(args, item: SchemaItem):
            if isinstance(args, list):
                return [convert(x, item, i) for i, x in enumerate(args)]
            else:
                return convert(args, item, 0)

        def get_value(item: SchemaItem, line: List):
            if item.argc_max != -1 and item.argc_max < len(line) - 1:
                raise ConfigValidationError(
                    f"Keyword: {item.kw!r} takes at most {item.argc_max!r} arguments"
                )
            if item.join_after > 0:
                n = item.join_after + 1
                args = " ".join(str(x) for x in line[n:])
                new_line = line[1:n]
                if len(args) > 0:
                    new_line.append(args)
                return with_types(new_line, item)
            if item.argc_max > 1 or item.argc_max == CONFIG_DEFAULT_ARG_MAX:
                return with_types(line[1:], item)
            else:
                return with_types(line[1], item) if len(line) > 1 else None

        line = None
        try:
            for line in self.keywords:
                key = line[0]
                if key not in schema:
                    if self.add_invalid:
                        self.config_dict[key] = line[1:]
                    warnings.warn(f"unknown key {key!r}", category=ConfigWarning)
                    continue
                item = schema[key]
                if item.multi_occurrence:
                    val = self.config_dict.get(key, [])
                    value = get_value(item, line)
                    val.append(value)
                    self.config_dict[key] = val
                else:
                    self.config_dict[key] = get_value(item, line)

            for _, item in schema.items():
                if item.required_set:
                    if item.kw not in self.config_dict:
                        raise ConfigValidationError(f"{item.kw} must be set.")

            if self.defines:
                self.config_dict["DEFINE"] = []
                for define in self.defines:
                    self.config_dict["DEFINE"].append(define)

            if self.data_kws:
                self.config_dict["DATA_KW"] = []
                for data_kw in self.data_kws:
                    self.config_dict["DATA_KW"].append(data_kw)
        except ConfigValidationError as e:
            if line is None:
                raise e from None
            line_msg = " ".join(line) if line else ""
            # should always be a token as no replacement should be done to keywords
            token: Token = line[0]
            raise ConfigValidationError(
                f"{e.errors}\nWas used in {line_msg} at line {token.line}",
                config_file=self.config_file,
            ) from e

        return self.config_dict

    def include(self, tree: Tree):
        raise NotImplementedError()

    def define(self, tree: Tree):
        kw = tree.children[0]
        value = tree.children[1].children[0]
        if not isinstance(value, str):
            raise ConfigValidationError(f"Cannot define {kw!r} to {value!r}")
        self.defines.append([kw, substitute(self.defines, value)])

    def data_kw(self, tree: Tree):
        kw = tree.children[0]
        value = tree.children[1].children[0]
        if not isinstance(value, str):
            raise ConfigValidationError(f"Cannot define {kw!r} to {value!r}")
        self.data_kws.append([kw, substitute(self.defines, value)])

    def keyword(self, tree: Tree):
        inst = []
        kw = tree.children[0]
        if not isinstance(kw, str):
            raise ConfigValidationError(f"Unrecognized keyword {kw!r}")
        do_env = True
        if kw in self.schema:
            do_env = self.schema[kw].expand_envvar
        inst.append(kw)
        for node in tree.children[1:]:
            if isinstance(node, Token):
                if node.type == "STRING":
                    # remove quotation marks
                    node.value = node[1 : len(node) - 1]
                inst.append(substitute(self.defines, node, expand_env=do_env))
            elif node.data == "arglist":
                name = node.children[0]
                args = []
                kw_list = node.children[1]
                for kw_pair in kw_list.children:
                    if kw_pair is None:
                        break
                    key = kw_pair.children[0]
                    val = kw_pair.children[1].children[0]
                    if not isinstance(val, str):
                        raise ConfigValidationError(
                            f"Could not read keyword value {kw!r} for {key!r}"
                        )
                    if isinstance(val, Token) and val.type == "STRING":
                        # remove quotation marks
                        val = val[1 : len(val) - 1]
                    val = substitute(self.defines, val, expand_env=do_env)
                    args.append((key, val))
                inst.append(name)
                inst.append(args)
            elif node.data == "arg":
                val = node.children[0]
                if not isinstance(val, str):
                    raise ConfigValidationError(f"Could not read argument {val!r}")
                inst.append(substitute(self.defines, val, expand_env=do_env))

        kw = inst[0]
        if kw in self.schema:
            item = self.schema[kw]
            if (
                item.argc_min != CONFIG_DEFAULT_ARG_MIN
                and len(inst) - 1 < item.argc_min
            ):
                raise ConfigValidationError(
                    f"{inst!r} needs at least {item.argc_min} arguments"
                )
            if (
                item.argc_max != CONFIG_DEFAULT_ARG_MAX
                and len(inst) - 1 > item.argc_max
            ):
                raise ConfigValidationError(
                    f"{inst!r} takes maximum {item.argc_max} arguments"
                )

        self.keywords.append(inst)


def handle_includes(tree: Tree, config_dir: str):
    to_include = []
    for i, node in enumerate(tree.children):
        if not isinstance(node, Tree):
            continue
        if isinstance(node.children[0], Token):
            continue  # This is either a newline or a comment
        if node.children[0].data == "include":
            inc_node = node.children[0]
            if len(inc_node.children) > 1:
                raise ConfigValidationError(
                    "Keyword:INCLUDE must have exactly one argument"
                )
            val = inc_node.children[0].children[0]
            if not isinstance(val, str):
                raise ConfigValidationError(
                    f"INCLUDE keyword must be given filepath, got {val!r}"
                )
            if not os.path.isabs(val):
                val = os.path.normpath(os.path.join(config_dir, val))

            sub_tree = _parse_file(val, "INCLUDE")
            handle_includes(sub_tree, os.path.dirname(val))

            to_include.append((sub_tree, i))

    to_include.reverse()
    for sub_tree, i in to_include:
        tree.children.pop(i)
        tree.children[i:i] = sub_tree.children


def _parse_file(file: Union[str, bytes, os.PathLike], error_context_string: str = ""):
    try:
        with open(file, encoding="utf-8") as f:
            content = f.read()
        parser = Lark(grammar, propagate_positions=True)
        tree = parser.parse(content + "\n")
        return tree
    except FileNotFoundError:
        if error_context_string == "INCLUDE":
            raise ConfigValidationError(
                f"{error_context_string} file: {file} not found"
            )
        else:
            raise IOError(f"{error_context_string} file: {file} not found")
    except UnexpectedCharacters as e:
        msg = str(e)
        if "DEFINE" in msg or "DATA_KW" in msg:
            msg = (
                f"\nKeyword:{'DEFINE' if 'DEFINE' in msg else 'DATA_KW'} "
                f"must have two or more arguments.\n"
                "It must be of the form: <ABC>  Inside the angle brackets, only"
                " characters, numbers, _ or - is allowed.\n"
                "\n"
                f"The parser said: {msg!r}"
            )
        raise ConfigValidationError(msg, config_file=file)


def parse(
    file: str,
    site_config: Optional[Dict[str, Any]] = None,
    add_invalid: bool = False,
):
    tree = _parse_file(file)
    config_dir = os.path.dirname(os.path.normpath(os.path.abspath(file)))

    handle_includes(tree, config_dir)
    config_file_name = os.path.basename(file)
    config_file_base = config_file_name.split(".")[0]
    return _TreeToDictTransformer(
        config_dir=config_dir,
        config_file_base=config_file_base,
        add_invalid=add_invalid,
        config_file=file,
    )(tree, site_config)
