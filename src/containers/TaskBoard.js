import React ,{ Component }from 'react';
import  ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import TaskList from './TaskList';
import AddTask from '../components/AddTask/'



export default class TaskBoard extends Component {
    render() {

        return (
            <div className="jumbotron">
                <div className={"row justify-content-md-center" }>
                    <AddTask />
                </div>

                <div className ="row justify-content-md-center" >

                    <TaskList  filter={'CREATED'}  onClassName={"text-white bg-secondary"} onHeader={"Доступны"}/>

                    <TaskList  filter={'IN_WORK'} onClassName={"text-white bg-info"} onHeader={"В работе"}/>

                    <TaskList  filter={'COMPLETED'} onClassName={"text-white bg-success"} onHeader={"Завершены"}/>
                </div>
            </div>

        );
    }
}