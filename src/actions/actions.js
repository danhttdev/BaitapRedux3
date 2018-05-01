import axios from 'axios';
import {
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    HOST
} from '../constants/constants';

export function at_togglePermit(){
    return {
        type: TOGGLE_PERMIT,
    }
}
export function at_toggleLogin(){
    return {
        type: TOGGLE_LOGIN,
    }
}
export function atx_login(username,password) {
    return (dispatch) => {
        let link=`${HOST}`;
        let info ={ username:username, password:password};
        axios.post(link, info)
        .then((res)=> {
            alert(res.data);
        })
    }
}
export function atx_signup(username,password, password2) {
    return (dispatch) => {
        let link=`${HOST}`;
        let info ={ username:username, password:password, password2:password2};
        axios.post(link, info)
        .then((res)=> {
            alert(res.data);
        })
    }
}
