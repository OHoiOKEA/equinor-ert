import logging

logger = logging.getLogger(__name__)
from ert_shared.storage.model import (
    Ensemble,
    Observation,
    Parameter,
    ParameterDefinition,
    Realization,
    Response,
    ResponseDefinition,
    Update,
    ObservationResponseDefinitionLink,
    Misfit,
    ParameterPrior,
)
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import Bundle
from sqlalchemy.orm.session import Session
from sqlalchemy.orm.exc import NoResultFound


class RdbApi:
    def __init__(self, connection):
        self._session = Session(bind=connection)

    def __enter__(self):
        return self

    def __exit__(self, type, value, traceback):
        self.close()

    def commit(self):
        self._session.commit()

    def flush(self):
        self._session.flush()

    def rollback(self):
        self._session.rollback()

    def close(self):
        self._session.close()

    def get_ensemble(self, name):
        return (
            self._session.query(Ensemble)
            .filter_by(name=name)
            .order_by(desc(Ensemble.time_created))
            .first()
        )

    def get_realization(self, index, ensemble_name):
        ensemble = self.get_ensemble(name=ensemble_name)
        return (
            self._session.query(Realization)
            .filter_by(ensemble_id=ensemble.id, index=index)
            .first()
        )

    def _get_response_definition(self, name, ensemble_id):
        return (
            self._session.query(ResponseDefinition)
            .filter_by(name=name, ensemble_id=ensemble_id)
            .one()
        )

    def _get_parameter_definition(self, name, group, ensemble_id):
        return (
            self._session.query(ParameterDefinition)
            .filter_by(name=name, group=group, ensemble_id=ensemble_id)
            .first()
        )

    def get_response(self, name, realization_index, ensemble_name):
        realization = self.get_realization(
            index=realization_index, ensemble_name=ensemble_name
        )
        response_definition = self._get_response_definition(
            name=name, ensemble_id=realization.ensemble.id
        )
        return (
            self._session.query(Response)
            .filter_by(
                realization_id=realization.id,
                response_definition_id=response_definition.id,
            )
            .first()
        )

    def get_response_data(self, name, ensemble_name):
        """Load lightweight "bundle" objects using the ORM."""

        bundle = Bundle("response", Response.id, Response.values, Realization.index)
        ensemble = self.get_ensemble(ensemble_name)
        response_definition = self._get_response_definition(
            name=name, ensemble_id=ensemble.id
        )
        for row in (
            self._session.query(bundle)
            .filter_by(response_definition_id=response_definition.id,)
            .join(Realization)
            .yield_per(1)
        ):
            yield row.response

    def get_parameter(self, name, group, realization_index, ensemble_name):
        realization = self.get_realization(
            index=realization_index, ensemble_name=ensemble_name
        )
        parameter_definition = self._get_parameter_definition(
            name=name, group=group, ensemble_id=realization.ensemble.id
        )
        return (
            self._session.query(Parameter)
            .filter_by(
                parameter_definition_id=parameter_definition.id,
                realization_id=realization.id,
            )
            .first()
        )

    def get_observation(self, name):
        """Return an observation.

        Return None if no observation found.
        """
        try:
            return self._session.query(Observation).filter_by(name=name).one()
        except NoResultFound:
            return None

    def add_ensemble(self, name, reference=None, priors=[]):
        msg = "Adding ensemble with name '{}'"
        logger.info(msg.format(name))

        ensemble = Ensemble(name=name, priors=priors)
        self._session.add(ensemble)
        if reference is not None:
            msg = "Adding ensemble '{}' as reference. '{}' is used on this update step."
            logger.info(msg.format(reference[0], reference[1]))

            reference_ensemble = self.get_ensemble(reference[0])
            update = Update(algorithm=reference[1])
            update.ensemble_reference = reference_ensemble
            update.ensemble_result = ensemble
            self._session.add(update)
        return ensemble

    def add_realization(self, index, ensemble_name):
        msg = "Adding realization with index '{}' on ensemble '{}'"
        logger.info(msg.format(index, ensemble_name))

        ensemble = self.get_ensemble(name=ensemble_name)

        realization = Realization(index=index)
        ensemble.realizations.append(realization)

        self._session.add(realization)

        return realization

    def add_response_definition(
        self, name, indexes_ref, ensemble_name,
    ):
        msg = "Adding response definition with name '{}' on ensemble '{}'. Attaching indexes with ref '{}'"
        logger.info(msg.format(name, ensemble_name, indexes_ref))

        ensemble = self.get_ensemble(name=ensemble_name)

        response_definition = ResponseDefinition(
            name=name, indexes_ref=indexes_ref, ensemble_id=ensemble.id,
        )
        self._session.add(response_definition)

        return response_definition

    def add_response(
        self, name, values_ref, realization_index, ensemble_name,
    ):
        msg = "Adding response with name '{}' on ensemble '{}', realization '{}'. Attaching values with ref '{}'"
        logger.info(msg.format(name, ensemble_name, realization_index, values_ref))

        realization = self.get_realization(
            index=realization_index, ensemble_name=ensemble_name
        )
        response_definition = self._get_response_definition(
            name=name, ensemble_id=realization.ensemble.id
        )
        response = Response(
            values_ref=values_ref,
            realization_id=realization.id,
            response_definition_id=response_definition.id,
        )
        self._session.add(response)

        return response

    def add_parameter_definition(self, name, group, ensemble_name, prior=None):
        msg = (
            "Adding parameter definition with name '{}' in group '{}' on ensemble '{}'"
        )
        logger.info(msg.format(name, group, ensemble_name))

        ensemble = self.get_ensemble(name=ensemble_name)

        parameter_definition = ParameterDefinition(
            name=name,
            group=group,
            ensemble_id=ensemble.id,
            prior_id=prior.id if prior is not None else None,
        )
        self._session.add(parameter_definition)

        return parameter_definition

    def find_prior(
        self, group, key
    ):  # called this find_ because it is a search, not lookup by id
        return (
            self._session.query(ParameterPrior)
            .filter_by(group=group, key=key)
            .one_or_none()
        )

    def add_parameter(self, name, group, value_ref, realization_index, ensemble_name):
        msg = "Adding parameter with name '{}', group '{}', realization '{}', value_ref '{}', ensemble '{}'"
        logger.info(
            msg.format(name, group, realization_index, value_ref, ensemble_name)
        )

        realization = self.get_realization(
            index=realization_index, ensemble_name=ensemble_name
        )

        parameter_definition = self._get_parameter_definition(
            name=name, group=group, ensemble_id=realization.ensemble.id
        )
        parameter = Parameter(
            value_ref=value_ref,
            realization_id=realization.id,
            parameter_definition_id=parameter_definition.id,
        )
        self._session.add(parameter)

        return parameter

    def add_observation(
        self, name, key_indexes_ref, data_indexes_ref, values_ref, stds_ref
    ):
        msg = "Adding observation with name '{}', key_indexes_ref '{}', data_indexes_ref '{}', values_ref '{}', stds_ref '{}'"
        logger.info(
            msg.format(name, key_indexes_ref, data_indexes_ref, values_ref, stds_ref)
        )

        observation = Observation(
            name=name,
            key_indexes_ref=key_indexes_ref,
            data_indexes_ref=data_indexes_ref,
            values_ref=values_ref,
            stds_ref=stds_ref,
        )
        self._session.add(observation)

        return observation

    def _add_observation_response_definition_link(
        self, observation_id, response_definition_id, active_ref
    ):
        msg = "Adding link between observation with id '{}' and response definition with id '{}'"
        logger.info(msg.format(observation_id, response_definition_id))

        link = ObservationResponseDefinitionLink(
            observation_id=observation_id,
            response_definition_id=response_definition_id,
            active_ref=active_ref,
        )
        self._session.add(link)
        return link

    def _add_misfit(self, value, link_id, response_id):
        msg = "Adding misfit ({}) between response with id '{}' and link with id '{}'"
        logger.info(msg.format(value, response_id, link_id))

        misfit = Misfit(
            value=value,
            observation_response_definition_link_id=link_id,
            response_id=response_id,
        )
        self._session.add(misfit)

        return misfit

    def add_observation_attribute(self, name, attribute, value):
        """Add an attribute-value pair to an observation.

        Return None if the observation was not found else return the
        observation.
        """
        msg = "Adding {} with value {} to observation with name {}"
        logger.info(msg.format(attribute, value, name))

        obs = self.get_observation(name)
        if obs is None:
            return None

        obs.add_attribute(attribute, value)
        self._session.add(obs)
        return obs

    def get_observation_attributes(self, name):
        """Return all attributes on an observation.

        Return None if the observation was not found.
        """
        obs = self.get_observation(name)
        return None if obs is None else obs.get_attributes()

    def get_observation_attribute(self, name, attribute):
        """Return an attribute on an observation.

        Return None if no observation was found, raise a KeyError if the
        attribute did not exist.
        """
        obs = self.get_observation(name)
        return None if obs is None else obs.get_attribute(attribute)

    def get_all_observation_keys(self):
        return [obs.name for obs in self._session.query(Observation.name).all()]

    def get_all_ensembles(self):
        return [ensemble for ensemble in self._session.query(Ensemble).all()]

    ############## - musiv - new functions ########################
    def get_realizations_by_ensemble_id(self, ensemble_id):
        return self._session.query(Realization).filter_by(ensemble_id=ensemble_id)

    def get_ensemble_by_id(self, ensemble_id):
        return self._session.query(Ensemble).filter_by(id=ensemble_id).one()

    def get_response_definitions_by_ensemble_id(self, ensemble_id):
        return self._session.query(ResponseDefinition).filter_by(
            ensemble_id=ensemble_id
        )

    def get_response_by_realization_id(self, response_definition_id, realization_id):
        return (
            self._session.query(Response)
            .filter_by(
                response_definition_id=response_definition_id,
                realization_id=realization_id,
            )
            .one()
        )

    def get_parameter_definitions_by_ensemble_id(self, ensemble_id):
        return self._session.query(ParameterDefinition).filter_by(
            ensemble_id=ensemble_id
        )

    def get_parameter_by_realization_id(self, parameter_definition_id, realization_id):
        return (
            self._session.query(Parameter)
            .filter_by(
                parameter_definition_id=parameter_definition_id,
                realization_id=realization_id,
            )
            .one()
        )

    def get_realizations_by_response_name(self, response_name, ensemble_id):
        return (
            self._session.query(ResponseDefinition).filter_by(
                name=response_name, ensemble_id=ensemble_id
            )
        ).one()

    def get_response_bundle(self, response_name, ensemble_id):
        # responsedefinition : observation, indexes_ref
        # realizations : index
        # response : values_ref
        return (
            self._session.query(ResponseDefinition)
            .join(Response, ResponseDefinition.id == Response.response_definition_id)
            .filter(ResponseDefinition.name == response_name)
            .filter(ResponseDefinition.ensemble_id == ensemble_id)
            .one()
        )

    def add_prior(self, group, key, function, parameter_names, parameter_values):
        msg = "Adding prior with group '{}', key '{}', function '{}'"
        logger.info(msg.format(group, key, function))

        prior = ParameterPrior(
            group=group,
            key=key,
            function=function,
            parameter_names=parameter_names,
            parameter_values=parameter_values,
        )

        self._session.add(prior)
        return prior

    def get_parameter_bundle(self, parameter_def_id, ensemble_id):
        try:
            parameter_bundle = (
                self._session.query(ParameterDefinition)
                .join(
                    Parameter,
                    ParameterDefinition.id == Parameter.parameter_definition_id,
                )
                .join(ParameterPrior, ParameterDefinition.prior_id == ParameterPrior.id)
                .filter(ParameterDefinition.id == parameter_def_id)
                .filter(ParameterDefinition.ensemble_id == ensemble_id)
                .one()
            )
            return parameter_bundle
        except NoResultFound:
            return None
