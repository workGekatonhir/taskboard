
const taskList = (action='CREATED')=>{
    if(action.type === "GET_TASKS"){
        switch (action.tasks) {
            case 'CREATED':
                return state.tasks;
            case  'IN_WORK':
                return state.tasks.filter(t=> t.status === 'IN_WORK');
            case  'COMPLETED':
                return state.tasks.filter(t=> t.status === 'COMPLETED');
            default:
                return action.tasks;
        }
    } else {
        return  action.tasks;
    }
};

export default taskList;