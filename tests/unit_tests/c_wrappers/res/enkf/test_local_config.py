def test_all_active(snake_oil_field_example):
    """ERT by default updates all parameters and observations
    as defined in the config file.
    """
    update_step = snake_oil_field_example.update_configuration[0]
    assert [param.name for param in update_step.parameters] == [
        "PERMX",
        "PORO",
        "SNAKE_OIL_PARAM_BPR",
        "SNAKE_OIL_PARAM_OP1",
        "SNAKE_OIL_PARAM_OP2",
    ]

    assert len(update_step.observations) == 8
