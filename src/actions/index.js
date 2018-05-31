let nextTaskId = 6;

export const addTask =(text) => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    text
});


export const getTasklist =(tasks,filter) => ({
       filter: filter,
       tasks: tasks,
       type: 'GET_TASKS'
});

export const changeStatus = (tasks,type,id) =>({
    type: type,
    id: id
});


export const clickedTask = (tasks,type,id) =>({
    type: type,
    id: id
});