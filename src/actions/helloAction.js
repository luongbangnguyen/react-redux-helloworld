/**
 * Created by nlbang on 6/14/2017.
 */
import database from '../utils/database'
import {reset} from 'redux-form';

export const DISPLAY_HELLO = 'DISPLAY_HELLO';
export const DISPLAY_LOGIN_SUCCESS = 'DISPLAY_LOGIN_SUCCESS';
export const DISPLAY_LOGIN_FAILURE = 'DISPLAY_LOGIN_FAILURE';

export const displayHello = (text) => (
  {
      type: DISPLAY_HELLO,
      text
  }
);

export const displayLoginSuccess =  (user) => {
    return {
        type: DISPLAY_LOGIN_SUCCESS,
        user
    }
};

export const displayLoginFailure =  (user) => {
    return {
        type: DISPLAY_LOGIN_FAILURE,
        user
    }
};

export const checkLogin = (user) => {
    return dispatch => {
        return database.ref('usernames').orderByChild('userName').equalTo(user.userName)
            .on('value', snap => {
                dispatch(handleLogin(user, snap));
            });
    }
};

const handleLogin = (user,snap) => dispatch  => {
    const value = snap.val();
    if(!value) {
        dispatch(displayLoginFailure(user));
        return
    }
    snap.forEach(data =>{
        if(data.val().password === user.password){
            dispatch(displayLoginSuccess(user));
            dispatch(reset('simpleFormComponent'));
            return 0;
        }else {
            dispatch(displayLoginFailure(user));
            return 0;
        }
    });
};