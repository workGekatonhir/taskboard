import React ,{ Component }from 'react';
import  ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import TaskList from '../components/TaskList';



export default class TaskBoard extends Component {
    render() {
        return (
            <div>
                <TaskList filter={'CREATED'}/>
            </div>

        );
    }
}