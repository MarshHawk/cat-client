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

export const showSearchResults = () => ({
    type: constants.SHOW_SEARCH_RESULTS,
})

export const fetchAllMij = () => {
    return (dispatch) => {
        dispatch(fetchAllMijInitiated())
    return axios({method:'get', url:'http://ec2-52-91-70-125.compute-1.amazonaws.com:3534/bibrecords/mij/v1', 
        headers: {'Authorization':sessionStorage.getItem("jwt")}
    })
        .then(res => dispatch(fetchAllMijFulfilled(res.data)))
        .then(n => dispatch(showSearchResults()))
        .catch(err => dispatch(fetchAllMijRejected(err)));
    }
}

