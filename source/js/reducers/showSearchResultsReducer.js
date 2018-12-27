import { constants } from '../constants/actionTypes.js'

export const showSearchResults = (state = false, action) => {
    switch (action.type) {
        case constants.SHOW_SEARCH_RESULTS:
            return true;
        default:
            return state;
    }
};