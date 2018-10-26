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

export function fetchAllMijNew() {
    return function (dispatch) {
        return axios.get('https://lov.linkeddata.es/dataset/lov/api/v2/vocabulary/info?vocab=algo')
            .then(res => dispatch({ type: constants.FETCH_ALL_FULFILLED, payload: res.data}));
    }
}

export const fetchAllMij = () => {
    return (dispatch) => {
        dispatch(fetchAllMijInitiated())
    return axios.get('https://lov.linkeddata.es/dataset/lov/api/v2/vocabulary/info?vocab=algo')
        .then(res => dispatch(fetchAllMijFulfilled(res.data)))
        .catch(err => dispatch(fetchAllMijRejected(err)));
}
}