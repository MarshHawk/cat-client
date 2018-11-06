import { constants } from '../constants/actionTypes.js';

export const mijResultPage = (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_ALL_FULFILLED:
            return buildResult(action.payload);
        default:
            return state;
    }
};

const resultDisplayFields = ['010', '050', '082','100','110','111','245'];

function isResultFieldType(fieldKey) {
    return resultDisplayFields.includes(fieldKey);
}

function buildResult(mijData){
    return (Object.keys(mijData).length > 0) ? mijData.map(d => 
        Object.assign({'_id':d._id}, ...d.fields.filter(f => 
            Object.keys(f).some(isResultFieldType)))) : {};
}