let nextTaskId =0;

export const addTask =(text) => ({
    type: 'ADD_TASK',
    id: nextTaskId,
    text
});


export const getTasklist =(tasks,filter) => ({
       filter: filter,
       tasks: tasks
});