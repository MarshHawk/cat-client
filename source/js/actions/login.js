import axios from 'axios';

import { constants } from '../constants/actionTypes.js';

export const loginInitiated = auth => ({
    type: constants.LOGIN_INITIATED,
    payload: {isFetching: true,
    isAuthenticated: false,
    auth: auth,
    idToken: undefined,
    errorMessage: undefined}
})

export const loginFulfilled = token => ({
    type: constants.LOGIN_FULFILLED,
    payload: {isFetching: false,
    isAuthenticated: true,
    idToken: token,
    errorMessage: undefined}
})

export const loginError = message => ({
    type: constants.LOGIN_ERROR,
    payload: {isFetching: false,
    isAuthenticated: false,
    idToken: undefined,
    errorMessage: message}
})

export function loginUser(creds) {

    let post = { 
        method: 'POST',
        url: 'http://localhost:8080/login',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        data: { user: 'admin', password:'admin'}
    }
  
    return dispatch => {
      dispatch(loginInitiated(creds))
  
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/login',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: { user: 'admin', password: 'admin' }
        })
        .then(res =>
          res.json().then(user => ({ user, res}))
              ).then(({ user, response }) =>  {
          if (!res.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(loginError(user.message))
            return Promise.reject(user)
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('id_token', user.idToken)
            localStorage.setItem('id_token', user.accessToken)
            // Dispatch the success action
            dispatch(loginFulfilled(user.idToken + user.accessToken))
          }
        }).catch(err => console.log("Error: ", err))
    }
  }