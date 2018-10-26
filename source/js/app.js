import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';
import CatSearchContainer from './containers/testContainer';
import TestRoutable from './components/testRoutable';

let initialState = {}
const loggerMiddleware = createLogger();
let store = createStore(combinedReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={CatSearchContainer} />
                <Route path="/routable" component={TestRoutable} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);