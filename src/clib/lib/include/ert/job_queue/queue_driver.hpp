#ifndef ERT_QUEUE_DRIVER_H
#define ERT_QUEUE_DRIVER_H

#include <ert/job_queue/job_status.hpp>
#include <ert/tooling.hpp>
#include <ert/util/hash.hpp>

typedef enum {
    NULL_DRIVER = 0,
    LSF_DRIVER = 1,
    LOCAL_DRIVER = 2,
    TORQUE_DRIVER = 4,
    SLURM_DRIVER = 5
} job_driver_type;

#define JOB_DRIVER_ENUM_SIZE 5

// The options supported by the base queue_driver.
#define MAX_RUNNING "MAX_RUNNING"

typedef struct queue_driver_struct queue_driver_type;

typedef void *(submit_job_ftype)(void *data, const char *cmd, int num_cpu,
                                 const char *run_path, const char *job_name,
                                 int argc, const char **argv);
typedef void(blacklist_node_ftype)(void *, void *);
typedef void(kill_job_ftype)(void *, void *);
typedef job_status_type(get_status_ftype)(void *, void *);
typedef void(free_job_ftype)(void *);
typedef void(free_queue_driver_ftype)(void *);
typedef bool(set_option_ftype)(void *, const char *, const void *);
typedef const void *(get_option_ftype)(const void *, const char *);
typedef void(init_option_list_ftype)(stringlist_type *);

extern "C" queue_driver_type *queue_driver_alloc(job_driver_type type);

void *queue_driver_submit_job(queue_driver_type *driver, const char *run_cmd,
                              int num_cpu, const char *run_path,
                              const char *job_name, int argc,
                              const char **argv);
extern "C" void queue_driver_free_job(queue_driver_type *driver,
                                      void *job_data);
void queue_driver_blacklist_node(queue_driver_type *driver, void *job_data);
extern "C" void queue_driver_kill_job(queue_driver_type *driver,
                                      void *job_data);
extern "C" job_status_type queue_driver_get_status(queue_driver_type *driver,
                                                   void *job_data);

extern "C" PY_USED const char *
queue_driver_get_name(const queue_driver_type *driver);

extern "C" bool queue_driver_set_option(queue_driver_type *driver,
                                        const char *option_key,
                                        const void *value);
extern "C" bool queue_driver_unset_option(queue_driver_type *driver,
                                          const char *option_key);
extern "C" const void *queue_driver_get_option(queue_driver_type *driver,
                                               const char *option_key);
void queue_driver_init_option_list(queue_driver_type *driver,
                                   stringlist_type *option_list);

extern "C" void queue_driver_free(queue_driver_type *driver);
void queue_driver_free__(void *driver);

extern "C" void queue_driver_set_max_running(queue_driver_type *driver,
                                             int max_running);
extern "C" PY_USED int
queue_driver_get_max_running(const queue_driver_type *driver);

typedef enum {
    SUBMIT_OK = 0,
    /** Typically no more attempts. */
    SUBMIT_JOB_FAIL = 1,
    /** The driver would not take the job - for whatever reason?? */
    SUBMIT_DRIVER_FAIL = 2,
    SUBMIT_QUEUE_CLOSED = 3
} /* The queue is currently not accepting more jobs - either (temporarilty)
                                             because of pause or it is going down. */
submit_status_type;

UTIL_IS_INSTANCE_HEADER(queue_driver);

#endif
