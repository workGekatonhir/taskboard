import React from 'react';
import { connect } from 'react-redux';
import { removeTask, changeStatus, clickedTask,editTask,needEdit } from '../actions/index';
import Task from '../components/Task/';

const getTaskList =({tasks, filter, onNext, onPrev,onClassName, onHeader, onMainClick, onRemove,onEdit,onNeedEdit})=>{
    return (
        <div className={"card col-lg-3 "+onClassName} style={{width: '18rem', marginLeft: "1rem",  marginTop: "1rem" }}>
            <div className="card-header text-uppercase text-center">
                {onHeader}
            </div>

            <div className='list-group list-group-flush '>

            {tasks.map(t=>{
                return (
                     <Task
                         key={t.id} task={t}
                         onNext={onNext}
                         onPrev={onPrev}
                         onMainClick = {onMainClick}
                         onRemove = {onRemove}
                         onEdit = {onEdit}
                         onNeedEdit = {onNeedEdit}
                         onClassName={'list-group-item '+onClassName}
                     />

                )
            })}
            </div>
        </div>
    )
};

const getTasks = (tasks, filter)=>{
    switch (filter) {
        case 'CREATED':
            return tasks.filter(t=> t.status === 'CREATED');
        case  'IN_WORK':
            return tasks.filter(t=> t.status === 'IN_WORK');
        case  'COMPLETED':
            return tasks.filter(t=> t.status === 'COMPLETED');
        default:
            return tasks;
    }
};

const mapStateToProps = (state, ownProps) =>  {
    return {
      tasks: getTasks(state.tasks,ownProps.filter),
      dispatch: state.dispatch
      // filter: ownProps.filter
    }
};


const mapDispatchToProps = (dispatch, ownProps) => ({
    onNext: (id) => {
         dispatch(changeStatus(ownProps.tasks,'NEXT_STATUS', id))
    },
    onPrev: (id) => {
        dispatch(changeStatus(ownProps.tasks,'PREVIOUS_STATUS', id))
    },
    onMainClick: (id) => {
        dispatch(clickedTask(ownProps.tasks,'CLICKED_TASK', id))
    },
    onRemove: (id) => {
        dispatch(removeTask(ownProps.tasks,'REMOVE_TASK', id))
    },
    onEdit: (id, text) => {
        dispatch(editTask(ownProps.tasks,'EDIT_TASK', id,text))
    },
    onNeedEdit: (id) => {
        dispatch(needEdit(ownProps.tasks,'NEED_EDIT_TASK', id))
    }

});

const TaskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(getTaskList);


export default TaskList;