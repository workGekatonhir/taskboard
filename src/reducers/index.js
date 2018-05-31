import { combineReducers } from 'redux';
import tasks from './tasks';
// import taskList from './taskList';

const taskApp = combineReducers({
    tasks,
    // taskList
});

export default taskApp;
