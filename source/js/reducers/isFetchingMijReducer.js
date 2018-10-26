import { constants } from '../constants/actionTypes.js'

export const isFetchingMij = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_ALL_INITIATED:
            return true;
        case constants.FETCH_ALL_FULFILLED:
            return false;
        case constants.FETCH_ALL_REJECTED:
            return false;
        default:
            return state;
    }
};