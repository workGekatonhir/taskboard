
const initialState = [
    {
        id: 1,
        text: 'Кпить молоко',
        completed: false,
        step:3,
        status:'COMPLETED',
        canNext: false,
        canPrev: true,
        clicked: false
    },
    {
        id: 2,
        text: 'Выпить молоко',
        step:2,
        status:'IN_WORK',
        canNext: true,
        canPrev: true,
        clicked: false
    },
    {
        id: 3,
        text: 'Бежать',
        step:1,
        completed: true,
        status:'CREATED',
        canNext: true,
        canPrev: false,
        clicked: true
    },
    {
        id: 4,
        text: 'Задача0',
        step:2,
        completed: true,
        status:'IN_WORK',

        canNext: true,
        canPrev: true,
        clicked: false

    },
    {
        id: 5,
        text: 'Задача1',
        step:1,
        status:'CREATED',

        canNext: true,
        canPrev: false,
        clicked: false
    },
];
const tasks = (state =initialState, action)=>{
    console.log(state);
    switch (action.type){
        case 'ADD_TASK':
            return [
                ...state,{
                     id: action.id,
                     text: action.text,
                     status:'CREATED',
                     step:1,
                     canNext: true,
                     canPrev: false,
                     completed: false
                }
            ];
        case 'NEXT_STATUS':
            return state.map(t=> nextStatus(t,action)) ;
        case 'PREVIOUS_STATUS':
            return state.map(t=> previousStatus(t,action)) ;
        case 'CLICKED_TASK':
            return state.map(t=> clickedTask(t,action))
        default:
            return state;
    }
};


const nextStatus =(state, action)=>{

    if(state.id !== action.id) {
        return state;
    }

    return{
        ...state,
        canNext: Object.keys(getStatus).length > state.step +1,
        canPrev: state.step +1 >1,
        step: state.step+1,
        status: getStatus[state.step+1]
    }

};

const previousStatus =(state, action)=>{
    if(state.id !== action.id) {
        return state;
    }
    return{
        ...state,
        canNext: Object.keys(getStatus).length > state.step -1,
        canPrev: state.step -1 > 1,
        step: state.step-1,
        status: getStatus[state.step-1]
    }

};

const clickedTask = (state, action) =>{
    if(state.id !== action.id) {
        return state;
    }
    return{
        ...state,
        clicked: !state.clicked
    }
};


const getStatus = {
    1: 'CREATED',
    2: 'IN_WORK',
    3: 'COMPLETED',
};



export default tasks;