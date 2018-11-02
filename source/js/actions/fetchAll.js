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
    return axios({method:'get', url:'http://localhost:8080/bibrecords/mij/v1', 
        headers: {'Authorization':sessionStorage.getItem("jwt")}
    })
        .then(res => dispatch(fetchAllMijFulfilled(res.data)))
        .catch(err => dispatch(fetchAllMijRejected(err)));
}
}

