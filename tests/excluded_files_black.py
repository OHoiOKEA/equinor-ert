import os


def get_files_excluded_from_black(root):
    excluded_files = [
        "docs/rst/manual/getting_started/configuration/poly_new/with_results/poly_eval.py",
        "docs/rst/manual/getting_started/configuration/poly_new/with_simple_script/poly_eval.py",
        "docs/rst/manual/reference/queue/queue_test_forward_model.py",
        "docs/rst/manual/getting_started/configuration/poly_new/with_observations/poly_eval.py",
        "ert_gui/__init__.py",
        "docs/rst/manual/getting_started/configuration/poly_new/with_parameters/poly_eval.py",
        "docs/rst/manual/conf.py",
        "ert_gui/resources/gui/help/config/keywords/config_help.py",
        "ert_gui/ertnotifier.py",
        "ert_gui/about_dialog.py",
        "ert_gui/ertplot.py",
        "ert_shared/version.py",
        "ert_gui/ertwidgets/activelabel.py",
        "ert_gui/ertwidgets/__init__.py",
        "ert_gui/ert_splash.py",
        "ert_gui/ertwidgets/caseselector.py",
        "ert_gui/ertwidgets/analysismoduleselector.py",
        "ert_gui/ertwidgets/closabledialog.py",
        "ert_gui/ertwidgets/caselist.py",
        "ert_gui/ertwidgets/legend.py",
        "ert_gui/ertwidgets/models/all_cases_model.py",
        "ert_gui/ertwidgets/customdialog.py",
        "ert_gui/ertwidgets/models/activerealizationsmodel.py",
        "ert_gui/ertwidgets/models/init_iter_value.py",
        "ert_gui/ertwidgets/models/ertsummary.py",
        "ert_gui/ertwidgets/models/path_model.py",
        "ert_gui/ertwidgets/checklist.py",
        "ert_gui/ertwidgets/models/targetcasemodel.py",
        "ert_gui/ertwidgets/analysismodulevariablespanel.py",
        "ert_gui/ertwidgets/listeditbox.py",
        "ert_gui/ertwidgets/models/ertmodel.py",
        "ert_gui/ertwidgets/models/analysismodulevariablesmodel.py",
        "ert_gui/ertwidgets/stringbox.py",
        "ert_gui/ertwidgets/summarypanel.py",
        "ert_gui/ertwidgets/searchbox.py",
        "ert_gui/ide/wizards/__init__.py",
        "ert_gui/ide/parameter.py",
        "ert_gui/ertwidgets/validationsupport.py",
        "ert_gui/ertwidgets/validateddialog.py",
        "ert_gui/ertwidgets/pathchooser.py",
        "ert_gui/ide/wizards/wizard_view.py",
        "ert_gui/plottery/__init__.py",
        "ert_gui/ide/wizards/tree_item.py",
        "ert_gui/ide/keyword.py",
        "ert_gui/ide/wizards/tree_model.py",
        "ert_gui/ide/highlighter.py",
        "ert_gui/gert_main.py",
        "ert_gui/plottery/plot_config_factory.py",
        "ert_gui/newconfig.py",
        "ert_gui/plottery/plot_context.py",
        "ert_gui/main_window.py",
        "ert_gui/plottery/plots/gaussian_kde.py",
        "ert_gui/plottery/plots/distribution.py",
        "ert_gui/plottery/plots/history.py",
        "ert_gui/plottery/plot_limits.py",
        "ert_gui/plottery/plots/ensemble.py",
        "ert_gui/plottery/plots/observations.py",
        "ert_gui/simulation/__init__.py",
        "ert_gui/plottery/plot_style.py",
        "ert_gui/simulation/ensemble_experiment_panel.py",
        "ert_gui/plottery/plots/plot_tools.py",
        "ert_gui/simulation/ensemble_smoother_panel.py",
        "ert_gui/plottery/plots/histogram.py",
        "ert_gui/simulation/iterated_ensemble_smoother_panel.py",
        "ert_gui/plottery/plot_config.py",
        "ert_gui/simulation/multiple_data_assimilation_panel.py",
        "ert_gui/simulation/single_test_run_panel.py",
        "ert_gui/tools/__init__.py",
        "ert_gui/simulation/simple_progress.py",
        "ert_gui/plottery/plots/statistics.py",
        "ert_gui/simulation/progress.py",
        "ert_gui/tools/export/export_tool.py",
        "ert_gui/simulation/simulation_panel.py",
        "ert_gui/tools/export/export_model.py",
        "ert_gui/plottery/plots/ccsp.py",
        "ert_gui/tools/export/export_keyword_model.py",
        "ert_gui/tools/help/help_tool.py",
        "ert_gui/tools/file/file_update_worker.py",
        "ert_gui/tools/file/file_dialog.py",
        "ert_gui/tools/export/exporter.py",
        "ert_gui/simulation/run_dialog.py",
        "ert_gui/tools/ide/ide_tool.py",
        "ert_gui/tools/help/help_window.py",
        "ert_gui/tools/help_center.py",
        "ert_gui/simulation/detailed_progress.py",
        "ert_gui/tools/ide/ide_window.py",
        "ert_gui/tools/load_results/load_results_tool.py",
        "ert_gui/tools/load_results/load_results_model.py",
        "ert_gui/tools/plot/__init__.py",
        "ert_gui/tools/ide/configuration_panel.py",
        "ert_gui/tools/plot/customize/__init__.py",
        "ert_gui/tools/manage_cases/manage_cases_tool.py",
        "ert_gui/tools/file/file_view.py",
        "ert_gui/tools/export/export_panel.py",
        "ert_gui/tools/load_results/load_results_panel.py",
        "ert_gui/tools/plot/color_chooser.py",
        "ert_gui/tools/plot/customize/default_customization_view.py",
        "ert_gui/tools/ide/ide_panel.py",
        "ert_gui/tools/plot/customize/style_customization_view.py",
        "ert_gui/tools/plot/data_type_proxy_model.py",
        "ert_gui/tools/plot/data_type_keys_widget.py",
        "ert_gui/tools/manage_cases/case_init_configuration.py",
        "ert_gui/tools/plot/customize/statistics_customization_view.py",
        "ert_gui/tools/plot/customize/customization_view.py",
        "ert_gui/tools/plot/filter_popup.py",
        "ert_gui/tools/plot/filterable_kw_list_model.py",
        "ert_gui/tools/plot/plot_case_model.py",
        "ert_gui/tools/plot/plot_case_selection_widget.py",
        "ert_gui/tools/plot/plot_widget.py",
        "ert_gui/tools/plot/plot_api.py",
        "ert_gui/tools/plot/customize/customize_plot_dialog.py",
        "ert_gui/tools/plot/widgets/copy_style_to_dialog.py",
        "ert_gui/tools/plot/widgets/clearable_line_edit.py",
        "ert_gui/tools/plot/widgets/custom_date_edit.py",
        "ert_gui/tools/plugins/plugin.py",
        "ert_gui/tools/plugins/plugin_handler.py",
        "ert_gui/tools/plot/style_chooser.py",
        "ert_gui/tools/workflows/__init__.py",
        "ert_gui/tools/plugins/plugins_tool.py",
        "ert_gui/tools/run_analysis/run_analysis_panel.py",
        "ert_gui/tools/plot/customize/limits_customization_view.py",
        "ert_shared/__init__.py",
        "ert_gui/tools/workflows/workflows_tool.py",
        "ert_gui/tools/plugins/plugin_runner.py",
        "ert_gui/tools/workflows/workflow_dialog.py",
        "ert_gui/tools/run_analysis/run_analysis_tool.py",
        "ert_shared/cli/notifier.py",
        "ert_shared/cli/workflow.py",
        "ert_gui/tools/tool.py",
        "ert_shared/cli/main.py",
        "ert_shared/ert_adapter.py",
        "ert_gui/tools/plugins/process_job_dialog.py",
        "ert_shared/feature_toggling.py",
        "ert_shared/cli/monitor.py",
        "ert_gui/tools/workflows/run_workflow_widget.py",
        "ert_shared/ide/keywords/data/argument.py",
        "ert_shared/ide/keywords/advanced_keywords.py",
        "ert_shared/ide/completers/path_completer.py",
        "ert_shared/ide/keywords/data/keyword.py",
        "ert_shared/ide/keywords/data/token.py",
        "ert_shared/ide/keywords/data/validation_status.py",
        "ert_shared/ide/keywords/definitions/argument_definition.py",
        "ert_shared/ide/keywords/data/configuration_line.py",
        "ert_shared/ide/keywords/configuration_line_parser.py",
        "ert_shared/ide/keywords/definitions/configuration_line_definition.py",
        "ert_shared/ide/keywords/definitions/bool_argument.py",
        "ert_shared/ide/keywords/definitions/keyword_definition.py",
        "ert_shared/ide/keywords/analysis_module_keywords.py",
        "ert_shared/ide/keywords/definitions/proper_name_argument.py",
        "ert_shared/ide/keywords/definitions/proper_name_format_argument.py",
        "ert_shared/ide/keywords/definitions/integer_argument.py",
        "ert_shared/ide/keywords/definitions/number_list_string_argument.py",
        "ert_shared/ide/keywords/definitions/float_argument.py",
        "ert_shared/ide/keywords/definitions/path_argument.py",
        "ert_shared/ide/keywords/definitions/percent_argument.py",
        "ert_shared/ide/keywords/definitions/proper_name_format_string_argument.py",
        "ert_shared/ide/keywords/definitions/string_argument.py",
        "ert_shared/ide/keywords/configuration_line_builder.py",
        "ert_shared/ide/keywords/definitions/range_string_argument.py",
        "ert_shared/ide/keywords/ert_keywords.py",
        "ert_shared/ide/keywords/eclipse_keywords.py",
        "ert_shared/ide/keywords/simulation_control_keywords.py",
        "ert_shared/ide/keywords/ensemble_keywords.py",
        "ert_shared/ide/keywords/parametrization_keywords.py",
        "ert_shared/ide/keywords/unix_environment_keywords.py",
        "ert_shared/ide/keywords/queue_system_keywords.py",
        "ert_shared/ide/keywords/plot_keywords.py",
        "ert_shared/ide/keywords/run_keywords.py",
        "ert_shared/ide/keywords/workflow_keywords.py",
        "ert_shared/ide/keywords/enkf_control_keywords.py",
        "ert_shared/models/ensemble_experiment.py",
        "ert_shared/plugins/hook_specifications/help_resources.py",
        "ert_shared/models/single_test_run.py",
        "ert_shared/plugins/hook_specifications/jobs.py",
        "ert_shared/plugins/plugin_response.py",
        "ert_shared/models/ensemble_smoother.py",
        "ert_shared/models/iterated_ensemble_smoother.py",
        "ert_shared/libres_facade.py",
        "ert_shared/models/base_run_model.py",
        "ert_shared/models/multiple_data_assimilation.py",
        "test-data/local/mini_ert/jobs/aggregator.py",
        "test-data/local/mini_ert/jobs/realization_fail.py",
        "test-data/local/poly_example/poly_eval.py",
        "test-data/local/mini_ert/jobs/perlin_fail.py",
        "test-data/local/snake_oil/jobs/snake_oil_diff.py",
        "test-data/local/snake_oil_field/jobs/snake_oil_diff.py",
        "test-data/local/snake_oil_field/make_data.py",
        "test-data/local/snake_oil/jobs/snake_oil_npv.py",
        "test-data/local/snake_oil_no_data/jobs/snake_oil_diff.py",
        "tests/__init__.py",
        "test-data/local/snake_oil_field/jobs/snake_oil_npv.py",
        "tests/all/test_import_gui.py",
        "test-data/local/snake_oil_no_data/jobs/snake_oil_npv.py",
        "test-data/local/mini_ert/jobs/perlin.py",
        "test-data/local/snake_oil_field/jobs/snake_oil_simulator.py",
        "tests/cli/test_workflow.py",
        "tests/data/test_data.py",
        "tests/cli/test_integration.py",
        "test-data/local/snake_oil/jobs/snake_oil_simulator.py",
        "tests/conftest.py",
        "tests/cli/test_monitor.py",
        "tests/gui/ide/test_bool_argument.py",
        "tests/gui/ide/test_configuration_line_definition.py",
        "tests/gui/ide/test_configuration_line.py",
        "test-data/local/snake_oil_no_data/jobs/snake_oil_simulator.py",
        "tests/gui/ide/test_path_argument.py",
        "tests/gui/ide/test_configuration_line_parser.py",
        "tests/gui/ide/test_percent_argument.py",
        "tests/gui/ide/test_configuration_line_builder.py",
        "tests/gui/ide/test_proper_name_argument.py",
        "tests/gui/ide/test_float_argument.py",
        "tests/cli/test_model_factory.py",
        "tests/gui/ide/test_proper_name_format_argument.py",
        "tests/gui/ide/test_integer_argument.py",
        "tests/gui/ide/test_proper_name_format_string_argument.py",
        "tests/gui/ide/test_range_string_argument.py",
        "tests/gui/models/test_active_realizations_model.py",
        "tests/gui/ide/test_tokens.py",
        "tests/gui/ide/wizards/test_tree_structure.py",
        "tests/gui/plottery/test_plot_config_history.py",
        "tests/gui/run_analysis/test_run_analysis.py",
        "tests/gui/test_multiple_data_assimilation.py",
        "tests/gui/tools/plot/test_storage_client.py",
        "tests/gui/plottery/test_plot_limits.py",
        "tests/gui/plottery/test_plot_style.py",
        "tests/gui/tools/plot/test_plot_api.py",
        "tests/gui/test_gui_load.py",
        "tests/gui/ide/test_ert_keywords.py",
        "tests/data/test_measured_data.py",
        "tests/shared/test_libres_facade.py",
        "tests/utils/__init__.py",
    ]
    return [os.path.join(root, fname) for fname in excluded_files]
