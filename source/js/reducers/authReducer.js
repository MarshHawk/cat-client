import { constants } from '../constants/actionTypes.js'

export const auth = (state = {
    isFetching: false,
    isAuthenticated: sessionStorage.getItem('jwt') ? true : false,
    username: 'Username',
    password: 'Password'
  }, action) => {
    switch (action.type) {
        case constants.LOGIN_INITIATED:
            return {...state, ...action.payload}
        case constants.LOGIN_FULFILLED:
            return {...state, ...action.payload}
        case constants.LOGIN_REJECTED:
            return {...state, ...action.payload}
        case constants.USERNAME_CHANGED:
            return {...state, username : action.payload}
        case constants.PASSWORD_CHANGED:
            return {...state, password : action.payload}
        default:
            return state;
    }
};