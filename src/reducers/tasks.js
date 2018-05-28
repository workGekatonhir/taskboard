
const initialState = [
    {
        id: 1,
        text: 12343,
        completed: false
    },
    {
        id: 2,
        text: 'asdasdasd',
        completed: false
    }
];
const tasks = (state =initialState, action)=>{
    switch (action.type){
        case 'ADD_TASK':
            return [
                ...state,{
                     id: action.id,
                     text: action.text,
                     completed: false
                }
            ];
        default:
            return state;
    }
};

export default tasks;