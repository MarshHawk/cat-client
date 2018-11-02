import axios from 'axios';

import { constants } from '../constants/actionTypes.js';

export const loginInitiated = (username) => ({
    type: constants.LOGIN_INITIATED,
    payload: {isFetching: true,
    isAuthenticated: false,
    hasLoginError: false,
    errorMessage: undefined,
    creds:username}
})

export const loginFulfilled = () => ({
    type: constants.LOGIN_FULFILLED,
    payload: {isFetching: false,
    isAuthenticated: true,
    hasLoginError: false,
    errorMessage: undefined}
})

export const loginError = message => ({
    type: constants.LOGIN_ERROR,
    payload: {isFetching: false,
    isAuthenticated: false,
    hasLoginError: true,
    errorMessage: message}
})

export function loginUser(username, password) {  
    return dispatch => {
      dispatch(loginInitiated(username)) 
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/login',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: { username: username, password: password }
        })
        .then(res => {
          if (res.status === 200) {
            sessionStorage.setItem('jwt', res.headers.authorization)
            dispatch(loginFulfilled())
          }
        }).catch(err => dispatch(loginError()))
    }
  }

export const usernameChanged = username => ({
    type: constants.USERNAME_CHANGED,
    payload: username
})

export const passwordChanged = password => ({
    type: constants.PASSWORD_CHANGED,
    payload: password
})