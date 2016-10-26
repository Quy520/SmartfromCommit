import * as types from '../actions/actionTypes';
import * as code from '../actions/ErrorCode';
const initialState = {
    errorCode:0,
    errorMsg:'',
}
export default function User(state=initialState, action) {
    const {payload, error, meta={}, type} = action;
    switch(action.typr){
        case types.FETCH_USER_SALT:
            return Object.assign({}, state, {
                ...payload
            });
             case types.USER_LOGIN:
            return Object.assign({}, state, {
                ...payload
            });
        case types.USER_LOGIN_FAILED:
            loginCheckError(action.error);
            return Object.assign({}, state, {
                ...payload
            })
        case types.USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
    
}

function loginCheckError(errorCode){
    switch (errorCode){
        case code.ERROR_MISS_PHONE:
            return '手机号码缺失';
        case code.ERROR_PARAM_PHONE:
            return '手机号码不合法';
        case code.ERROR_CONTROL_ACCOUNT_NOT:
            return '没有此帐号';
        case code.ERROR_MISS_PWD:
            return '密码缺失';
        case code.ERROR_MISS_SALT:
            return '未调用获取salt值API';
        case code.ERROR_CONTROL_USER_REMOVE:
            return '帐号被移除';
        case code.ERROR_CONTROL_PASSWORD:
            return '密码错误';
    }
}