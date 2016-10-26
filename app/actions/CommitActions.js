import * as types from './actionTypes';

export function doCommit(id, name, phone, location) {

    return dispatch => {

        const params = {
            headers: {

                'Accept': 'application/json',
                //表单
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: 'id' + id + ',name' + name + ',phone' + phone + ',location' + location
        }

        fetch('http://api.shztzn.com/api/v1.0/manage/check-in', params).then(response => response.json()).then(responseData => {
            console.log(responseData);
            if (responseData.errorCode == 0) {
                dispatch(commitSuccessed());
            } else {
                dispatch(commitFailed(responseData.errorCode));
            }
        })
        .catch(err => {
            console.error('An error occurred', err);
        })
        .done();
    }
}

function commitSuccessed() {
    return {
        type: types.COMMIT_DEVICEINFO,
        errorCode: 0
    }
}

function commitFailed(errCode) {
    return {
        type: types.COMMIT_DEVICEINFO_FAILED,
        errorCode: errCode
    }
}