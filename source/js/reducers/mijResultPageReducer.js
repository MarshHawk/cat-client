import { constants } from '../constants/actionTypes.js'

export const mijResultPage = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_ALL_FULFILLED:
            return action.payload;
        default:
            return state;
    }
};