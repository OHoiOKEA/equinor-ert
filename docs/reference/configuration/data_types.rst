.. _Data_types_available_in_ERT:

Data types
==========

Briefly, the purpose of ERT is to pass uncertain parameter values to a simulator [#]_
and save the responses.
ERT must therefore be able to read and write data in a format understood by the simulator.

Data managed by ERT are organized in different *data types* described in
this chapter. Configuring the data used in the conditioning project is an
important part of setting up an ERT configuration file - in practical terms this
is how you configure which uncertainty parameters should be studied. The data
types in ERT can be categorized in two ways:

1. How the data type behaves dynamically: is it a static parameter like porosity
   or permeability - i.e. does it serve as *input* to the simulator, or
   is it a quantity which is generated as a result from the simulation. When
   understanding the model updating algorithm and process it is important to
   understand this difference properly.

2. How the data type is implemented, what type of files does it read and write,
   how it is configured and so on.

NB: All datatypes have a common namespace; i.e. a globally unique keyword.


.. [#] *Simulator* in this context includes both pre,- and post-processing steps,
       as well as a physics simulator such as ECLIPSE or Flow.


Parameters
----------

The *parameter* datatypes will serve as input to the simulator. For a pure
uncertainty study they will pass right through, model updating update
parameters. Sample internally or load externally.



Scalar parameters with a template: GEN_KW
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For detailed description and examples see :ref:`here <gen_kw>`.

Prior distributions available for use with GEN_KW
.........................................................
.. _prior_distributions:

The algorithms used for updating parameters expect normally distributed variables.
ERT supports other types of distributions by transforming normal variables as outlined next.

  1. ERT samples a random variable ``x ~ N(0,1)`` - before outputing to the
     forward model this is *transformed* to ``y ~ F(Y)`` where the
     distribution ``F(Y)`` is the correct prior distribution.

  2. When the prior simulations are complete ERT calculates misfits between
     simulated and observed values and *updates* the parameters; hence the
     variables ``x`` now represent samples from a posterior distribution which
     is Normal with mean and standard deviation *different from (0,1)*.

The transformation prescribed by ``F(y)`` still "works" - but it no longer maps
to a distribution in the same family as initially specified by the prior. A
consequence of this is that the update process can *not* give you a posterior
with updated parameters in the same distribution family as the Prior.

REPRODUCIBILITY
,,,,,,,,,,,,,,,

When ERT samples values there is a seed for each parameter. This means that
if ERT is started with a fixed :ref:`RANDOM_SEED <random_seed>` each prior
that is sampled will be identical. When running without a random seed ERT
will output which random seed was used, so it is possible to reproduce results
as long as that is kept.

This section only applies if a fixed seed is used:
  * If the ensemble size is increased from N -> N+1 the N first realizations will be identical to before
  * Parameter order is irrelevant
  * Parameter names are case sensitive, PARAM:MY_PARAM != PARAM:myParam

NORMAL
,,,,,,

To set a normal (Gaussian) prior, use the keyword NORMAL. It takes two
arguments, a mean value and a standard deviation. Thus, the following example
will assign a normal prior with mean 0 and standard deviation 1 to the variable
VAR1:

::

   VAR1   NORMAL    0   1

LOGNORMAL
,,,,,,,,,

A stochastic variable is log normally distributed if the logarithm of the
variable is normally distributed. In other words, if X is normally distributed,
then Y = exp(X) is log normally distributed.

A log normal prior is suited to model positive quantities with a heavy tail
(tendency to take large values). To set a log normal prior, use the keyword
LOGNORMAL. It takes two arguments, the mean and standard deviation of the
*logarithm* of the variable:

::

   VAR2   LOGNORMAL  0  1

TRUNCATED_NORMAL
,,,,,,,,,,,,,,,,,

This *TRUNCATED_NORMAL* distribution works as follows:

   1. Draw random variable :math:`X \sim N(\mu,\sigma)`
   2. Clamp X to the interval [min, max]

This is **not** a proper normal distribution; hence the
clamping to `[min,max]` should be an exceptional event. To configure
this distribution for a situation with mean 1, standard deviation 0.25
and hard limits 0 and 10:

::

   VAR3  TRUNCATED_NORMAL  1  0.25   0  10


UNIFORM
,,,,,,,

A stochastic variable is uniformly distributed if has a constant
probability density on a closed interval. Thus, the uniform
distribution is completely characterized by it's minimum and maximum
value. To assign a uniform distribution to a variable, use the keyword
UNIFORM, which takes a minimum and a maximum value for a the
variable. Here is an example, which assigns a uniform distribution
between 0 and 1 to a variable ``VAR4``:

::

   VAR4 UNIFORM 0 1

It can be shown that among all distributions bounded below by a and
above by b, the uniform distribution with parameters a and b has the
maximal entropy (contains the least information). Thus, the uniform
distribution should be your preferred prior distribution for robust
modeling of bounded variables.


LOGUNIF
,,,,,,,

A stochastic variable is log uniformly distributed if it's logarithm
is uniformly distributed on the interval [a,b]. To assign a log
uniform distribution to a a variable, use the keyword LOGUNIF, which
takes a minimum and a maximum value for the output variable as
arguments. The example

::

   VAR5  LOGUNIF 0.00001 1

will give values in the range [0.00001,1] - with considerably more
weight towards the lower limit. The log uniform distribution is useful
when modeling a bounded positive variable who has most of it's
probability weight towards one of the bounds.

CONST
,,,,,

The keyword CONST is used to assign a Dirac distribution to a variable, i.e. set
it to a constant value. Here is an example of use:

::

   VAR6 CONST 1.0

DUNIF
,,,,,

The keyword DUNIF is used to assign a discrete uniform distribution. It takes
three arguments, the number of bins, a minimum and a maximum value. Here is an
example which creates a discrete uniform distribution with 1, 2, 3, 4 and 5
as possible values:

::

    VAR7 DUNIF 5 1 5

Note that you can use the minimum and maximum to scale your distribution. In
particular this will give you values on the form

.. math::

    \textit{min} + i * (max - min) / (nbins - 1)

for values of i between 0 and nbins-1.


ERRF
,,,,,

The ERRF keyword is used to define a prior resulting from applying the error
function to a normally distributed variable with mean 0 and variance 1. The
keyword takes four arguments:

::

  VAR8 ERRF MIN MAX SKEWNESS WIDTH

The arguments MIN and MAX sets the minimum and maximum value of the transform.
Zero SKEWNESS results in a symmetric distribution, whereas negative SKEWNESS
will shift the distribution towards the left and positive SKEWNESS will shift it
towards the right. Letting WIDTH be larger than one will cause the distribution
to be unimodal, whereas WIDTH less than one will create a bi-modal distribution.


DERRF
,,,,,

The keyword DERRF is similar to ERRF, but will create a discrete output. DERRF
takes 5 arguments:

::

  VAR9 DERRF NBINS MIN MAX SKEWNESS WIDTH

NBINS set the number of discrete values, and the other arguments have the same
effect as in ERRF.

TRIANGULAR
,,,,,,,,,,

::

    TRIANGULAR XMIN XMODE XMAX

Where ``XMODE`` correponds to the location of the maximum in the distribution function.


Loading GEN_KW values from an external file
...........................................

The default use of the GEN_KW keyword is to let the ERT application sample
random values for the elements in the GEN_KW instance, but it is also possible
to tell ERT to load a precreated set of data files, this can for instance be
used as a component in an experimental design based workflow. When using external
files to initialize the GEN_KW instances you supply an extra keyword
``INIT_FILE:/path/to/priors/files%d`` which tells where the prior files are:

::

		GEN_KW  MY-FAULTS   MULTFLT.tmpl   MULTFLT.INC   MULTFLT.txt    INIT_FILES:priors/multflt/faults%d

In the example above you must prepare files priors/multflt/faults0,
priors/multflt/faults1, ... priors/multflt/faultsn which ert will load when you
initialize the case. The format of the GEN_KW input files can be of two
varieties:

1. The files can be plain ASCII text files with a list of numbers:

::

		1.25
		2.67

The numbers will be assigned to parameters in the order found in the MULTFLT.txt file.

2. Alternatively values and keywords can be interleaved as in:

::

		FAULT1 1.25
		FAULT2 2.56

in this case the ordering can differ in the init files and the parameter file.

The heritage of the ERT program is based on the EnKF algorithm, and the EnKF
algorithm evolves around Gaussian variables - internally the GEN_KW variables
are assumed to be samples from the N(0,1) distribution, and the distributions
specified in the parameters file are based on transformations starting with a
N(0,1) distributed variable. The slightly awkward consequence of this is that to
let your sampled values pass through ERT unmodified you must configure the
distribution NORMAL 0 1 in the parameter file; alternatively if you do not
intend to update the GEN_KW variable you can use the distribution RAW.



3D field parameters: FIELD
~~~~~~~~~~~~~~~~~~~~~~~~~~

The FIELD data type is used to parametrize quantities which have extent over the
full grid; porosity and permeability are the most typical examples of quantities
which are estimated and modelled with the FIELD data type. In the configuration
file the FIELD keywords are configured like this:

::

	FIELD  PORO PARAMETER  poro.grdecl  .....

PORO is in principle an arbitrary string ID, but if the fields in question
represent e.g. the porosity use of a matching string of course makes sense. The
string "PARAMETER" serves no purpose at the moment, but is legacy from the
time when ERT could do full EnKF and also needed to handle dynamic fields like
pressure and saturations.

The "poro.grdecl" argument represents the name of the file which ert will
prepare for the forward model, observe the reservoir data file must have an
`INCLUDE` statement corresponding to this file, i.e.

::

   INCLUDE
       'poro.grdecl' /

For the example above.


Field initialization
....................

Observe that ERT can *not* sample field variables internally, they must be
supplied through another application - typically geo modelling software like
RMS; so to use the FIELD datatype you must have a workflow external to ERT which
can create/sample the fields. When you have established a workflow for
generating these fields externally there are *two* ways to load them into ERT:
`INIT_FILES` to load pregenerated initial fields or `FORWARD_INIT` to load as
part of the forward model.


Initialization with INIT_FILES
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

In the situation where you do not have geo modelling as a part of the forward
model you will typically use the geo modelling software to create an ensemble of
geological realisations up front. Assuming you intend to update the porosity
these realisations should typically be in the form of files
``/path/poro_0.grdecl, /path/poro_1.grdecl, ... /path/poro_99.grdecl``. The
``INIT_FILES:`` directive is used to configure ERT to load those files when ERT
is initializing the data. The number ``0, 1, 2, ...`` should be replaced with
the integer format specified ``%d`` - which ERT will replace with the
realization number runtime, i.e.

::

   FIELD ... INIT_FILES:/path/poro_%d.grdecl

in this case. The files can be in eclipse grdecl format or rms roff format; the
type is determined from the extension so you should use the common extensions
``grdecl`` or ``roff``.


Initialization with FORWARD_INIT
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

When geomodelling is an integrated part of the forward model it is more
attractive to let the forward model generate the parameter fields. To enable
this we must pass the ``FORWARD_INIT:True`` when configuring the field, and also
pass a name in the ``INIT_FILES:poro.grdecl`` for the file which should be
generated by the forward model component.

Observe that there are two important differences to the ``INIT_FILES:``
attribute when it used as *the way* to initialize fields, and when it is used in
combination with ``FORWARD_INIT:True``. When ``INIT_FILES:`` is used alone the
filename given should contain a ``%d`` which will be replaced with realization
number, when used with ``FORWARD_INIT:True`` that is not necessary. Furthermore
in the ``FORWARD_INIT:True`` case the *the path is interpreted relative to the
runpath folder*, whereas in the other case the path is interpreted relative to
the location of the main ERT configuration file.

When using ``FORWARD_INIT:True`` together with an update algorithm in ERT the
field generated by the geo modelling software should only be used in the first
iteration (prior), in the subsequent iterations the forward model should use the
field as it comes out from ERT. The typical way to achieve this is:

1. The forward model component outputs to a temporary file ``tmp_poro.grdecl``.
2. In the first iteration ERT will *not* output a file ``poro.grdecl``, but in
   the second and subsequent iterations a ``poro.grdecl`` file will be created
   by ERT - this is at the core of the ``FORWARD_INIT:True`` functionality.
3. In the forward model there should be a job ``CAREFUL_COPY_FILE`` which will copy
   ``tmp_poro.grdecl`` *only if* ``poro.grdecl`` does not already exist. The
   rest of the forward model components should use ``poro.grdecl``.

note
  With regards to behavior relative to the values in storage;
  What is really happening is that if ERT has values, those will be dumped
  to the runpath, and if not, it will read those from the runpath after the
  forward model finishes. However, if you change your runpath and "case" in
  the config file, but not your storage case, you will end up with the same
  parameter values but different RMS seed.


Field transformations
.....................

For Assisted history matching, the variables in ERT should be normally
distributed internally - the purpose of the transformations is to enable working
with normally distributed variables internally in ERT and expose another
distribution to the forward model through the use of transformations. Thus, the
optional arguments ``INIT_TRANSFORM:FUNC`` and ``OUTPUT_TRANSFORM:FUNC`` are
used to transform the user input of parameter distribution.
``INIT_TRANSFORM:FUNC`` is a function which will be applied when the field are
loaded into ERT. ``OUTPUT_TRANSFORM:FUNC`` is a function which will be applied to
the field when it is exported from ERT, and ``FUNC`` is the name of a transformation
function to be applied. The avaialble functions are listed below:

| "POW10"			: This function will raise x to the power of 10: :math:`y = 10^x`
| "TRUNC_POW10"	: This function will raise x to the power of 10 - and truncate lower values at 0.001.
| "LOG"			: This function will take the NATURAL logarithm of :math:`x: y = \ln{x}`
| "LN"			: This function will take the NATURAL logarithm of :math:`x: y = \ln{x}`
| "LOG10"			: This function will take the log10 logarithm of :math:`x: y = \log_{10}{x}`
| "EXP"			: This function will calculate :math:`y = e^x`.
| "LN0"			: This function will calculate :math:`y = \ln{x} + 0.000001`
| "EXP0"			: This function will calculate :math:`y = e^x - 0.000001`


The most common scenario is that a log-normal distributed permeability in the
geo modelling software is transformed to become normally distributted in ERT, to
achieve this you do:

1. ``INIT_TRANSFORM:LOG`` To ensure that the variables which were initially
   log-normal distributed are transformed to normal distribution when they are
   loaded into ert.

2. ``OUTPUT_TRANSFORM:EXP`` To ensure that the variables are reexponentiated to
   be log-normal distributed before going out to Eclipse.


2D Surface parameters: SURFACE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The SURFACE keyword can be used to work with surface from RMS in the irap
format.
For detailed description and examples see :ref:`here <surface>`.

**Regarding templates:**

You may supply the arguments TEMPLATE:/template/file and KEY:MaGiCKEY. The
template file is an arbitrary existing text file, and KEY is a magic string
found in this file. When ERT is running the magic string is replaced with
parameter data when the ECLIPSE_FILE is written to the directory where the
simulation is run from. Consider for example the following configuration:

::

	TEMPLATE:/some/file   KEY:Magic123

The template file can look like this (only the Magic123 is special):

::

   Header line1
   Header line2
   ============
   Magic123
   ============
   Footer line1
   Footer line2

When ERT is running the string Magic123 is replaced with parameter values, and
the resulting file will look like this:

::

	Header line1
	Header line2
	============
	1.6723
	5.9731
	4.8881
	.....
	============
	Footer line1
	Footer line2


Simulated data
--------------

The datatypes in the *Simulated data* chapter correspond to datatypes which are
used to load results from a forward model simulation and into ERT. In a model
updating workflow instances of these datatypes are compared with observed values
and that is used as basis for the update process. Also post processing tasks
like plotting and QC is typically based on these data types.

Summary: SUMMARY
~~~~~~~~~~~~~~~~

The ``SUMMARY`` keyword is used to configure which summary vectors you want to
load from the (Eclipse) reservoir simulation. In its simplest form, the
``SUMMARY`` keyword just lists the vectors you wish to load. You can have
multiple ``SUMMARY`` keywords in your config file, and each keyword can mention
multiple vectors:

::

   SUMMARY  WWCT:OP_1  WWCT:OP_2  WWCT:OP_3
   SUMMARY  FOPT FOPR  FWPR
   SUMMARY  GGPR:NORTH GOPR:SOUTH

If you in the observation use the ``SUMMARY_OBSERVATION`` or
``HISTORY_OBSERVATION`` keyword to compare simulations and observations for a
particular summary vector you need to add this vector after SUMMARY in the ERT
configuration to have it plotted.

You can use wildcard notation to all summary vectors matching a pattern, i.e. this:

::

   SUMMARY WWCT*:* WGOR*:*
   SUMMARY F*
   SUMMARY G*:NORTH

will load the ``WWCT`` and ``WWCTH``, as well as ``WGOR`` and ``WGORH`` vectors
for all wells, all field related vectors and all group vectors from the ``NORTH``
group.


General data: GEN_DATA
~~~~~~~~~~~~~~~~~~~~~~

The ``GEN_DATA`` keyword is used to load text files which have been generated
by the forward model. 
For detailed description and examples see :ref:`here <gen_data>`.

EnKF heritage
-------------

With regards to the datatypes in ERT this is a part of the application where the
EnKF heritage shows through quite clearly, the datetypes offered by ERT would
probably be different if ERT was made for Ensemble Smoother from the outset.
Pecularites of EnKF heritage include:

1. The `FIELD` implementation can behave both as a dynamic quantity, i.e.
   pressure and saturation, and static property like porosity. In ERT it is
   currently *only used* as a parameter, but that this *possible* dual usage
   exists in the code adds a significant complexity.

2. The parameter types have an internal pseudo time dependence corresponding to
   the "update time" induced by the EnKF scheme. This pseudo time dependence is
   not directly exposed to the user, but it is still part of the implementation
   and e.g. when writing plugins which work with parameter data managed by ERT
   you must relate to it.

3. The time dependence of the `GEN_DATA` implementation. This is just too
   complex, there have been numerous problems with people who configure the
   `GEN_DATA` keywords incorrectly.



