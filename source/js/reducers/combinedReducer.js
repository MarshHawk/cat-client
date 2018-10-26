import { combineReducers } from 'redux'
import { mijResultPage } from './mijResultPageReducer.js';
import { isFetchingMij } from './isFetchingMijReducer.js';

const combinedReducer = combineReducers({
    mijResultPage,
    isFetchingMij
})

export default combinedReducer