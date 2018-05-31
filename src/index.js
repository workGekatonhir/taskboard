import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import style from './bootstrap/bootstrap.min.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
