import { constants } from '../constants/actionTypes.js'

export const auth = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) => {
    switch (action.type) {
        case constants.LOGIN_INITIATED:
            return {...state, ...action.payload}
        case constants.LOGIN_FULFILLED:
            return {...state, ...action.payload}
        case constants.LOGIN_REJECTED:
            return {...state, ...action.payload}
        default:
            return state;
    }
};