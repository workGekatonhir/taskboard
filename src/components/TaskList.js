import React from 'react';
import { connect } from 'react-redux';
import taskList from "../reducers/taskList";

const getTaskList =({tasks})=>{
    return (
        <div>
            <ul>
            {tasks.map(t=>{
                return (
                    <li key={t.id}>
                        {t.text}
                    </li>
                )
            })}
            </ul>
        </div>
    )
};

const mapStateToProps = (state, filter) =>  {
    return {
      tasks: dispatch(taskList(state.tasks, filter))
    }
};

const TaskList = connect(
    mapStateToProps
)(getTaskList);


export default TaskList;