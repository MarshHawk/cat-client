import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';
import TestRoutable from './components/testRoutable';
import Root from './root';

const loggerMiddleware = createLogger();
let store = createStore(combinedReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
))

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/routable" component={TestRoutable} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)
//let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)
//let store = createStoreWithMiddleware(quotesApp)