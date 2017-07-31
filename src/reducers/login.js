/**
 * Created by nlbang on 7/18/2017.
 */
import { DISPLAY_LOGIN_SUCCESS, DISPLAY_LOGIN_FAILURE } from '../actions/helloAction';

const login = (state = '', action) => {
    switch (action.type) {
        case DISPLAY_LOGIN_SUCCESS:
            return 'User' + action.user.userName + ' Login Success';
        case DISPLAY_LOGIN_FAILURE:
            return 'User ' + action.user.userName + ' Login Failure';
        default:
            return state;
    }
};
export default login;
