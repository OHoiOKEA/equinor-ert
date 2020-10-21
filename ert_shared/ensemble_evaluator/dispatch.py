from collections import defaultdict

__LOOKUP_MAP = defaultdict(list)


def register_event_handler(event_type):
    def decorator(function):
        __LOOKUP_MAP[event_type].append(function)

        def wrapper(*args, **kwargs):
            return function(*args, **kwargs)

        return wrapper

    return decorator


async def handle_event(self, event):
    for f in __LOOKUP_MAP[event["type"]]:
        await f(self, event)
