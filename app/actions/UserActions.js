import * as types from './actionTypes';
import {
    NativeModules
} from 'react-native';

var EncryptionModule = NativeModules.EncryptionModule;


function userLogin(username, password, salt) {
    return dispatch => {
        var encrypt_password1 = EncryptionModule.MD5ByCallBack(password, (msg) => {
            var encrypt_password2 = EncryptionModule.MD5ByCallBack(msg.toLowerCase() + username, (msg) => {
                var encrypt_password3 = EncryptionModule.MD5ByCallBack(msg.toLowerCase() + salt, (msg) => {

                    const params = {
                        headers: {
                            'Accept': 'application/json',
                            //表单
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'POST',
                        body: 'Password=' + msg.toLowerCase() + ''
                    }

                    fetch('http://api.shztzn.com/api/v1.0/auth/login', params)
                        .then(response => response.json())
                        .then(responseData => {
                            console.log(responseData);
                            if (responseData.errorCode == 0) {
                                dispatch(userLoginSuccessed());
                            } else {
                                dispatch(userLoginFailed());
                            }
                        })
                        .catch(err => {
                            console.error('An error occurred', err);
                        })
                        .done();

                }, (error) => {
                    console.log('MD5加密失败-通过Callback回调');
                });
            }, (error) => {
                console.log('MD5加密失败-通过Callback回调');
            });
        }, (error) => {
            console.log('MD5加密失败-通过Callback回调');
        });
    }
}

function userLoginSuccessed() {
    
    return {
        type: types.USER_LOGIN,
    }
}

function userLoginFailed() {

    return {
        type: types.USER_LOGIN_FAILED
    }
}