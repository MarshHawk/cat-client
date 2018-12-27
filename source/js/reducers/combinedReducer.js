import { combineReducers } from 'redux';
import { auth } from './authReducer.js';
import { isFetchingMij } from './isFetchingMijReducer.js';
import { mijResultPage } from './mijResultPageReducer.js';
import { showSearchResults } from './showSearchResultsReducer.js';

const combinedReducer = combineReducers({
    auth,
    mijResultPage,
    isFetchingMij,
    showSearchResults
})

export default combinedReducer