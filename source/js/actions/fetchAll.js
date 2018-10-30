import { constants } from '../constants/actionTypes.js';
import axios from 'axios';

export const fetchAllMijInitiated = () => ({
    type: constants.FETCH_ALL_INITIATED,
})

export const fetchAllMijFulfilled = data => ({
    type: constants.FETCH_ALL_FULFILLED, payload: data,
})

export const fetchAllMijRejected = error => ({
    type: constants.FETCH_ALL_REJECTED, payload: error,
})

export const fetchAllMij = () => {
    return (dispatch) => {
        dispatch(fetchAllMijInitiated())
    return axios({method:'get', url:'http://localhost:8080/bibrecords/mij/v1', auth: {
        username: 'user',
        password: '88f517cf-3af7-41be-89d8-095311e864b7'
    }})
        .then(res => dispatch(fetchAllMijFulfilled(res.data)))
        .catch(err => dispatch(fetchAllMijRejected(err)));
}
}

