
const taskList = (todo=[], action)=>{
    switch (action.filter) {
        case 'CREATED':
            return todo;
        case  'IN_WORK':
            return todo.filter(t=> t.status === 'IN_WORK');
        case  'COMPLETED':
            return todo.filter(t=> t.status === 'COMPLETED');
        default:
            return todo;
    }
};

export default taskList;