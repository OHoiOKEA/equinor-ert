# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import experimentserver_pb2 as experimentserver__pb2


class ExperimentserverStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.connect_experiment = channel.stream_stream(
                '/experimentserver.Experimentserver/connect_experiment',
                request_serializer=experimentserver__pb2.Experiment.SerializeToString,
                response_deserializer=experimentserver__pb2.Experiment.FromString,
                )
        self.connect_ensemble = channel.stream_stream(
                '/experimentserver.Experimentserver/connect_ensemble',
                request_serializer=experimentserver__pb2.Ensemble.SerializeToString,
                response_deserializer=experimentserver__pb2.Ensemble.FromString,
                )
        self.connect_realization = channel.stream_stream(
                '/experimentserver.Experimentserver/connect_realization',
                request_serializer=experimentserver__pb2.Realization.SerializeToString,
                response_deserializer=experimentserver__pb2.Realization.FromString,
                )
        self.connect_job = channel.stream_stream(
                '/experimentserver.Experimentserver/connect_job',
                request_serializer=experimentserver__pb2.Job.SerializeToString,
                response_deserializer=experimentserver__pb2.Job.FromString,
                )


class ExperimentserverServicer(object):
    """Missing associated documentation comment in .proto file."""

    def connect_experiment(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def connect_ensemble(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def connect_realization(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def connect_job(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ExperimentserverServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'connect_experiment': grpc.stream_stream_rpc_method_handler(
                    servicer.connect_experiment,
                    request_deserializer=experimentserver__pb2.Experiment.FromString,
                    response_serializer=experimentserver__pb2.Experiment.SerializeToString,
            ),
            'connect_ensemble': grpc.stream_stream_rpc_method_handler(
                    servicer.connect_ensemble,
                    request_deserializer=experimentserver__pb2.Ensemble.FromString,
                    response_serializer=experimentserver__pb2.Ensemble.SerializeToString,
            ),
            'connect_realization': grpc.stream_stream_rpc_method_handler(
                    servicer.connect_realization,
                    request_deserializer=experimentserver__pb2.Realization.FromString,
                    response_serializer=experimentserver__pb2.Realization.SerializeToString,
            ),
            'connect_job': grpc.stream_stream_rpc_method_handler(
                    servicer.connect_job,
                    request_deserializer=experimentserver__pb2.Job.FromString,
                    response_serializer=experimentserver__pb2.Job.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'experimentserver.Experimentserver', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Experimentserver(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def connect_experiment(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/experimentserver.Experimentserver/connect_experiment',
            experimentserver__pb2.Experiment.SerializeToString,
            experimentserver__pb2.Experiment.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def connect_ensemble(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/experimentserver.Experimentserver/connect_ensemble',
            experimentserver__pb2.Ensemble.SerializeToString,
            experimentserver__pb2.Ensemble.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def connect_realization(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/experimentserver.Experimentserver/connect_realization',
            experimentserver__pb2.Realization.SerializeToString,
            experimentserver__pb2.Realization.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def connect_job(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/experimentserver.Experimentserver/connect_job',
            experimentserver__pb2.Job.SerializeToString,
            experimentserver__pb2.Job.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
