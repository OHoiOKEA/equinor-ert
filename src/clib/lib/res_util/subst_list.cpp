#include <filesystem>

#include <ctype.h>
#include <stdlib.h>
#include <string.h>

#include <ert/res_util/file_utils.hpp>
#include <ert/util/buffer.hpp>
#include <ert/util/hash.hpp>
#include <ert/util/parser.hpp>
#include <ert/util/util.hpp>
#include <ert/util/vector.hpp>

#include <ert/res_util/subst_list.hpp>

namespace fs = std::filesystem;

/*
   This file implements a small support struct for search-replace
   operations, along with wrapped calls to util_string_replace_inplace().

   Substitutions can be carried out on files and string in memory (char *
   with \0 termination); and the operations can be carried out inplace, or
   in a filtering mode where a new file/string is created.


   Usage
   =====
    1. Start with allocating a subst_list instance with subst_list_alloc().

    2. Insert key,value pairs to for search-replace with the functions

        * subst_list_insert_ref(subst_list , key , value);
        * subst_list_insert_owned_ref(subst_list , key , value);
        * subst_list_insert_copy(subst_list , key , value );

       The difference between these functions is who is owning the memory
       pointed to by the value pointer.

    3. Do the actual search-replace operation on a file or memory buffer:

       * subst_list_filter_file()   : Does search-replace on a file.
       * subst_list_update_string() : Does search-replace on a buffer.

    4. Free the subst_list and go home.

   Internally the (key,value) pairs used for substitutions are stored in a
   vector, preserving insert order. If you insert the cascade

     ("A","B")
     ("B","C")
       .....
     ("Y","Z")

   You will eventually end up with a string where all capital letters have
   been transformed to 'Z'.
*/

typedef enum {
    SUBST_DEEP_COPY = 1,
    SUBST_MANAGED_REF = 2,
    SUBST_SHARED_REF = 3
} subst_insert_type; /* Mode used in the subst_list_insert__() function */

struct subst_list_struct {
    /** The string substitutions we should do. */
    vector_type *string_data;
    hash_type *map;
};

/**
   The subst_list type is implemented as a hash of subst_list_node
   instances. This node type is not exported out of this file scope at
   all.
*/
typedef struct {
    /** Wether the memory pointed to by value should bee freed.*/
    bool value_owner;
    char *value;
    char *key;
} subst_list_string_type;

/** Allocates an empty instance with no values. */
static subst_list_string_type *subst_list_string_alloc(const char *key) {
    subst_list_string_type *node =
        (subst_list_string_type *)util_malloc(sizeof *node);
    node->value_owner = false;
    node->value = NULL;
    node->key = util_alloc_string_copy(key);
    return node;
}

static void subst_list_string_free_content(subst_list_string_type *node) {
    if (node->value_owner)
        free(node->value);
}

static void subst_list_string_free(subst_list_string_type *node) {
    subst_list_string_free_content(node);
    free(node->key);
    free(node);
}

static void subst_list_string_free__(void *node) {
    subst_list_string_free((subst_list_string_type *)node);
}

/**
   input_value can be NULL.
*/
static void subst_list_string_set_value(subst_list_string_type *node,
                                        const char *input_value,
                                        subst_insert_type insert_mode) {
    subst_list_string_free_content(node);
    {
        char *value;
        if (insert_mode == SUBST_DEEP_COPY)
            value = util_alloc_string_copy(input_value);
        else
            value = (char *)input_value;

        if (insert_mode == SUBST_SHARED_REF)
            node->value_owner = false;
        else
            node->value_owner = true;

        node->value = value;
    }
}

/**
   Find the node corresponding to 'key' -  returning NULL if it is not found.
*/
static subst_list_string_type *
subst_list_get_string_node(const subst_list_type *subst_list, const char *key) {
    subst_list_string_type *node = NULL;
    int index = 0;

    /* Linear search ... */ /*Should use map*/
    while ((index < vector_get_size(subst_list->string_data)) &&
           (node == NULL)) {
        subst_list_string_type *inode = (subst_list_string_type *)vector_iget(
            subst_list->string_data, index);

        if (strcmp(inode->key, key) == 0) /* Found it */
            node = inode;
        else
            index++;
    }

    return node;
}

static subst_list_string_type *
subst_list_insert_new_node(subst_list_type *subst_list, const char *key) {
    subst_list_string_type *new_node = subst_list_string_alloc(key);

    vector_append_owned_ref(subst_list->string_data, new_node,
                            subst_list_string_free__);

    hash_insert_ref(subst_list->map, key, new_node);
    return new_node;
}

bool subst_list_has_key(const subst_list_type *subst_list, const char *key) {
    return hash_has_key(subst_list->map, key);
}

subst_list_type *subst_list_alloc() {
    subst_list_type *subst_list =
        (subst_list_type *)util_malloc(sizeof *subst_list);
    subst_list->map = hash_alloc();
    subst_list->string_data = vector_alloc_new();

    return subst_list;
}

static void subst_list_insert__(subst_list_type *subst_list, const char *key,
                                const char *value,
                                subst_insert_type insert_mode) {
    subst_list_string_type *node = subst_list_get_string_node(subst_list, key);

    if (node == NULL) /* Did not have the node. */
        node = subst_list_insert_new_node(subst_list, key);
    subst_list_string_set_value(node, value, insert_mode);
}

/*
   There are three different functions for inserting a key-value pair
   in the subst_list instance. The difference between the three is in
   which scope takes/has ownership of 'value'. The alternatives are:

    subst_list_insert_ref: In this case the calling scope has full
       ownership of value, and is consquently responsible for freeing
       it, and ensuring that it stays a valid pointer for the subst_list
       instance. Probably the most natural function to use when used
       with static storage, i.e. typically string literals.

    subst_list_insert_owned_ref: In this case the subst_list takes
       ownership of the value reference, in the sense that it will
       free it when it is done.

    subst_list_insert_copy: In this case the subst_list takes a copy
       of value and inserts it. Meaning that the substs_list instance
       takes repsonibility of freeing, _AND_ the calling scope is free
       to do whatever it wants with the value pointer.

*/

void subst_list_append_owned_ref(subst_list_type *subst_list, const char *key,
                                 const char *value) {
    subst_list_insert__(subst_list, key, value, SUBST_MANAGED_REF);
}

void subst_list_append_copy(subst_list_type *subst_list, const char *key,
                            const char *value) {
    subst_list_insert__(subst_list, key, value, SUBST_DEEP_COPY);
}

void subst_list_clear(subst_list_type *subst_list) {
    vector_clear(subst_list->string_data);
}

void subst_list_free(subst_list_type *subst_list) {
    vector_free(subst_list->string_data);
    hash_free(subst_list->map);
    free(subst_list);
}

/*
  Below comes many different functions for doing the actual updating
  the functions differ in the form of the input and output. At the
  lowest level, is the function

    subst_list_uppdate_buffer()

  which will update a buffer instance. This function again will call
  another function for pure string substitutions.
*/

/**
   Updates the buffer inplace with all the string substitutions in the
   subst_list.
*/
static bool subst_list_replace_strings(const subst_list_type *subst_list,
                                       buffer_type *buffer) {
    int index;
    bool global_match = false;
    for (index = 0; index < vector_get_size(subst_list->string_data); index++) {
        const subst_list_string_type *node =
            (const subst_list_string_type *)vector_iget_const(
                subst_list->string_data, index);
        if (node->value != NULL) {
            bool match;
            buffer_rewind(buffer);
            do {
                match = buffer_search_replace(buffer, node->key, node->value);
                if (match)
                    global_match = true;
            } while (match);
        }
    }
    return global_match;
}

/**
   This function reads the content of a file, and writes a new file
   where all substitutions in subst_list have been performed. Observe
   that target_file and src_file *CAN* point to the same file, in
   which case this will amount to an inplace update. In that case a
   backup file is written, and held, during the execution of the
   function.

   Observe that @target_file can contain a path component, that
   component will be created if it does not exist.
*/
bool subst_list_filter_file(const subst_list_type *subst_list,
                            const char *src_file, const char *target_file) {
    bool match;
    char *backup_file = NULL;
    buffer_type *buffer = buffer_fread_alloc(src_file);
    // Ensure that the buffer is a \0 terminated string:
    buffer_fseek(buffer, 0, SEEK_END);
    buffer_fwrite_char(buffer, '\0');

    if (util_same_file(src_file, target_file)) {
        char *backup_prefix = util_alloc_sprintf("%s-%s", src_file, __func__);
        backup_file = util_alloc_tmp_file("/tmp", backup_prefix, false);
        free(backup_prefix);
    }

    /* Writing backup file */
    if (backup_file != NULL) {
        FILE *stream = util_fopen(backup_file, "w");
        buffer_stream_fwrite_n(buffer, 0, -1,
                               stream); /* -1: Do not write the trailing \0. */
        fclose(stream);
    }

    /* Doing the actual update */
    match = subst_list_replace_strings(subst_list, buffer);

    /* Writing updated file */
    {
        auto stream = mkdir_fopen(fs::path(target_file), "w");

        buffer_stream_fwrite_n(buffer, 0, -1,
                               stream); /* -1: Do not write the trailing \0. */
        fclose(stream);
    }

    /* OK - all went hunka dory - unlink the backup file and leave the building. */
    if (backup_file != NULL) {
        remove(backup_file);
        free(backup_file);
    }
    buffer_free(buffer);
    return match;
}

/**
   This function does search-replace on string instance inplace.
*/
bool subst_list_update_string(const subst_list_type *subst_list,
                              char **string) {
    buffer_type *buffer =
        buffer_alloc_private_wrapper(*string, strlen(*string) + 1);
    bool match = subst_list_replace_strings(subst_list, buffer);
    *string = (char *)buffer_get_data(buffer);
    buffer_free_container(buffer);

    return match;
}

/**
   This function allocates a new string where the search-replace
   operation has been performed.
*/
char *subst_list_alloc_filtered_string(const subst_list_type *subst_list,
                                       const char *string) {
    char *filtered_string = util_alloc_string_copy(string);
    if (subst_list)
        subst_list_update_string(subst_list, &filtered_string);
    return filtered_string;
}

/**
   This allocates a new subst_list instance, the copy process is deep,
   in the sense that all srings inserted in the new subst_list
   instance have their own storage, irrespective of the ownership in
   the original subst_list instance.
*/
subst_list_type *subst_list_alloc_deep_copy(const subst_list_type *src) {
    subst_list_type *copy;
    copy = subst_list_alloc();

    {
        int index;
        for (index = 0; index < vector_get_size(src->string_data); index++) {
            const subst_list_string_type *node =
                (const subst_list_string_type *)vector_iget_const(
                    src->string_data, index);
            subst_list_insert__(copy, node->key, node->value, SUBST_DEEP_COPY);
        }
    }
    return copy;
}

int subst_list_get_size(const subst_list_type *subst_list) {
    return vector_get_size(subst_list->string_data);
}

const char *subst_list_iget_key(const subst_list_type *subst_list, int index) {
    if (index < vector_get_size(subst_list->string_data)) {
        const subst_list_string_type *node =
            (const subst_list_string_type *)vector_iget_const(
                subst_list->string_data, index);
        return node->key;
    } else {
        util_abort("%s: index:%d to large \n", __func__, index);
        return NULL;
    }
}

const char *subst_list_iget_value(const subst_list_type *subst_list,
                                  int index) {
    if (index < vector_get_size(subst_list->string_data)) {
        const subst_list_string_type *node =
            (const subst_list_string_type *)vector_iget_const(
                subst_list->string_data, index);
        return node->value;
    } else {
        util_abort("%s: index:%d to large \n", __func__, index);
        return NULL;
    }
}

const char *subst_list_get_value(const subst_list_type *subst_list,
                                 const char *key) {
    const subst_list_string_type *node =
        (const subst_list_string_type *)hash_get(subst_list->map, key);
    return node->value;
}

void subst_list_fprintf(const subst_list_type *subst_list, FILE *stream) {
    int index;
    for (index = 0; index < vector_get_size(subst_list->string_data); index++) {
        const subst_list_string_type *node =
            (const subst_list_string_type *)vector_iget_const(
                subst_list->string_data, index);
        fprintf(stream, "%s = %s\n", node->key, node->value);
    }
}

/**
   This function splits a string on the given character, taking into account
   that it may contain strings delimited by ' or ". It returns the length of the
   first part of the splitted string. For instance, splitting on a ','
   character, if the input is:

   foo "blah, foo" x 'y', and more "stuff"

   it will find the comma after 'y', and hence return a value of 21.

   The function returns a negative value if it contains a string, started with '
   or ", which is not terminated. It returns the length of the string if the
   split character is not found.
*/
static int find_substring(const char *arg_string, const char *split_char) {
    char pattern[4] = {'"', '\'', '\0',
                       '\0'}; // we accept both ' and " to delimite strings.
    strcat(pattern, split_char);
    int len = strcspn(arg_string, pattern);

    // If string delimiter is found, we need to find the corresponding end
    // delimiter. If we do not find it, that is an error. If we do find it, we
    // need to continue searching for the split character or the start of
    // another string.
    while (strlen(arg_string) > len &&
           (arg_string[len] == '"' || arg_string[len] == '\'')) {
        const char delimiter = arg_string[len];

        // Add the delimiter to the length found so far.
        len++;

        // The string must be long enough to accomdate a corresponding delimiter.
        if (strlen(arg_string) <= len)
            return -1;

        // Find the corresponding delimiter, start searching the string right
        // after the delimiter we just found, at an offset of len.
        const char *end = strchr(arg_string + len + 1, delimiter);

        // No corresponding end delimiter is an error.
        if (end == NULL)
            return -1;

        // Update the lenght of the substring found so far.
        len = end - arg_string + 1;

        // We found the second string delimiter, but not the character we are
        // using for splitting. Therefore, repeat the original search starting
        // right after the second delimiter. We keep doing this in a loop until
        // we find the split character, or until the string is exhausted.
        if (strlen(end + 1) > 0)
            len += strcspn(end + 1, pattern);
    }

    return len;
}

/**
   Trim spaces left and right from a string. Do not reallocate the string, just
   move the start pointer of the string, and terminate the string appropiately.
*/
static char *trim_string(char *str) {
    // Move the start of the string to skip space.
    while (isspace(*str))
        str++;
    // Shorten the string to remove trailing space.
    int len = strlen(str);
    while (len > 0 && isspace(str[len - 1]))
        len--;
    str[len] = '\0';
    return str;
}

void subst_list_add_from_string(subst_list_type *subst_list,
                                const char *arg_string_orig) {
    if (!arg_string_orig)
        return;

    // Copy the string, since we will modify it while working on it, and trim it.
    char *arg_string_copy = util_alloc_string_copy(arg_string_orig);
    char *arg_string = trim_string(arg_string_copy);
    char *tmp = NULL;

    while (strlen(arg_string)) {
        // Find the next argument/value pair, by splitting on a ','.
        int arg_len = find_substring(arg_string, ",");
        if (arg_len < 0)
            util_abort("%s: missing string delimiter in argument: %s\n",
                       __func__, arg_string_orig);

        // Extract the argument/value pair, and parse it.
        tmp = util_alloc_substring_copy(arg_string, 0, arg_len);

        // Split on '=' to find the argument name (key) and value.
        int key_len = find_substring(tmp, "=");

        if (key_len < 0) // There is a ' or " string that is not closed.
            util_abort("%s: missing string delimiter in argument: %s\n",
                       __func__, arg_string_orig);
        if (key_len == strlen(tmp)) // There is no '=".
            util_abort("%s: missing '=' in argument: %s\n", __func__,
                       arg_string_orig);

        // Split the string into trimmed key and value strings.
        tmp[key_len] = '\0';
        char *key = trim_string(tmp);
        char *value = trim_string(tmp + key_len + 1);

        // Check that the key and value strings are not empty.
        if (strlen(key) == 0)
            util_abort("%s: missing key in argument list: %s\n", __func__,
                       arg_string_orig);
        if (strlen(value) == 0)
            util_abort("%s: missing value in argument list: %s\n", __func__,
                       arg_string_orig);

        // Check that the key does not contain string delimiters.
        if (strchr(key, '\'') || strchr(key, '"'))
            util_abort("%s: key cannot be a string: %s\n", __func__,
                       arg_string_orig);

        // Add to the list of parsed arguments.
        subst_list_append_copy(subst_list, key, value);

        free(tmp);

        // Skip to the part of the string that was not parsed yet.
        arg_string += arg_len;

        // Skip whitespace and at most one comma.
        arg_string = trim_string(arg_string);
        if (*arg_string == ',') {
            arg_string = trim_string(arg_string + 1);
            if (strlen(arg_string) == 0) // trailing comma.
                util_abort("%s: trailing comma in argument list: %s\n",
                           __func__, arg_string_orig);
        }
    }

    free(arg_string_copy);
}
