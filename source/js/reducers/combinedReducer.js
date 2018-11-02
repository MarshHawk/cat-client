import { combineReducers } from 'redux';
import { auth } from './authReducer.js';
import { mijResultPage } from './mijResultPageReducer.js';
import { isFetchingMij } from './isFetchingMijReducer.js';

const combinedReducer = combineReducers({
    auth,
    mijResultPage,
    isFetchingMij
})

export default combinedReducer;