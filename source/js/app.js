import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import combinedReducer from './reducers/combinedReducer'
import TestContainer from './containers/testContainer';
import TestRoutable from './components/testRoutable';

let initialState = {}
let store = createStore(combinedReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        {/* Insert container component here */}
        <Router>
            <Switch>
                <Route exact path="/" component={TestContainer} />
                <Route exact path="/Routable" component={TestRoutable} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);