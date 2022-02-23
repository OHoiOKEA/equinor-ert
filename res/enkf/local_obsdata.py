from cwrap import BaseCClass

from res.enkf.local_obsdata_node import LocalObsdataNode
from res import ResPrototype
from res import _lib

class LocalObsdata(BaseCClass):
    TYPE_NAME = "local_obsdata"

    _alloc = ResPrototype("void* local_obsdata_alloc(char*)", bind=False)
    _free = ResPrototype("void  local_obsdata_free(local_obsdata)")
    _size = ResPrototype("int   local_obsdata_get_size(local_obsdata)")
    _has_node = ResPrototype("bool  local_obsdata_has_node(local_obsdata, char*)")
    _del_node = ResPrototype("void  local_obsdata_del_node(local_obsdata, char*)")
    _name = ResPrototype("char* local_obsdata_get_name(local_obsdata)")

    def __init__(self, name, obs=None):
        # The obs instance should be a EnkFObs instance; some circular dependency problems
        # by importing it right away. It is not really optional, but it is made optional
        # here to be able to give a decent error message for old call sites which did not
        # supply the obs argument.
        if obs is None:
            msg = """

The LocalObsdata constructor has recently changed, as a second
argument you should pass the EnkFObs instance with all the
observations. You can typically get this instance from the ert main
object as:

    obs = ert.getObservations()
    local_obs = LocalObsData("YOUR-KEY" , obs)

"""
            raise Exception(msg)

        assert isinstance(name, str)

        c_ptr = self._alloc(name)
        if c_ptr:
            super().__init__(c_ptr)
            self.initObservations(obs)
        else:
            raise ValueError(
                'Unable to construct LocalObsdata with name "%s" from given obs.' % name
            )

    def initObservations(self, obs):
        self.obs = obs

    def __len__(self):
        """@rtype: int"""
        return self._size()

    def __getitem__(self, key):
        """@rtype: LocalObsdataNode"""
        if isinstance(key, int):
            if key < 0:
                key += len(self)
            if 0 <= key < len(self):
                return _lib.local.local_obsdata.iget_node(self, key)
            else:
                raise IndexError("Invalid index, valid range is [0, %d)" % len(self))
        else:
            if key in self:
                return _lib.local.local_obsdata.get_node(self, key)
            else:
                raise KeyError('Unknown key "%s".' % key)


    def __iter__(self):
        cur = 0
        while cur < len(self):
            yield self[cur]
            cur += 1

    def __contains__(self, item):
        """@rtype: bool"""
        if isinstance(item, str):
            return self._has_node(item)
        elif isinstance(item, LocalObsdataNode):
            return self._has_node(item.getKey())

        return False

    def __delitem__(self, key):
        assert isinstance(key, str)
        if key in self:
            self._del_node(key)
        else:
            raise KeyError('Unknown key "%s".' % key)

    def addNode(self, key):
        """@rtype: LocalObsdataNode"""
        assert isinstance(key, str)
        if key in self.obs:
            if key not in self:
                node = LocalObsdataNode(key)
                return _lib.local.local_obsdata.add_node(self, node)
            else:
                raise KeyError("Tried to add existing observation key:%s " % key)
        else:
            raise KeyError(
                "The observation node: %s is not recognized observation key" % key
            )

    def addObsVector(self, obs_vector):
        self.addNode(obs_vector.getObservationKey())

    def name(self):
        return self._name()

    def getName(self):
        """@rtype: str"""
        return self.name()

    def getActiveList(self, key):
        """@rtype: ActiveList"""
        if key in self:
            return _lib.local.local_obsdata.get_active_list(self, key)
        else:
            raise KeyError('Local key "%s" not recognized.' % key)

    def copy_active_list(self, key):
        """@rtype: ActiveList"""
        if key in self:
            return _lib.local.local_obsdata.copy_active_list(self, key)
        else:
            raise KeyError('Local key "%s" not recognized.' % key)

    def free(self):
        self._free()

    def __repr__(self):
        return "LocalObsdata(len = %d, name = %s) at 0x%x" % (
            len(self),
            self.name(),
            self._address(),
        )
