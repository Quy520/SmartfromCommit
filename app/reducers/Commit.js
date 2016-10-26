import * as types from '../actions/actionTypes';

const initialState = {
    errorCode: 0
}

export default function Commit(state=initialState, action) {

    switch(action.type) {
        case types.COMMIT_DEVICEINFO:
            return Object.assign({}, state, {
                errorCode: action.errorCode
            });

        case types.COMMIT_DEVICEINFO_FAILED:
            return Object.assign({}, state, {
                errorCode: action.errorCode
            });

        default:
            return state;
    }
}