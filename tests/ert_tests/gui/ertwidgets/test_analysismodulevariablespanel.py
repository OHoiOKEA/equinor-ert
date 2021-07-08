from ert_gui.ertwidgets.analysismodulevariablespanel import AnalysisModuleVariablesPanel
from ert_gui.ertwidgets.models.analysismodulevariablesmodel import (
    AnalysisModuleVariablesModel,
)
from unittest.mock import patch


def test_createSpinBox(qtbot):

    with patch.object(AnalysisModuleVariablesPanel, "__init__", lambda x, y: None):

        analysis_module_variables_model = AnalysisModuleVariablesModel
        variable_dialog = AnalysisModuleVariablesPanel("NONAME")

        for entry in AnalysisModuleVariablesModel._VARIABLE_NAMES.items():
            variable_name = entry[0]
            # CV_NFOLDS is calculated from number of iterations
            if variable_name != "CV_NFOLDS":
                if int == analysis_module_variables_model.getVariableType(
                    variable_name
                ):
                    variable_value = 1
                    variable_dialog.createSpinBox(
                        variable_name,
                        variable_value,
                        int,
                        analysis_module_variables_model,
                    )
