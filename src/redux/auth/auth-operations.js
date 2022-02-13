import Axios from 'axios';
import {
    registerUserRequest, registerUserSuccess, registerUserError,
    onLoginRequest, onLoginSuccess, onLoginError,
    logAuthActionRequest, logAuthActionSuccess, logAuthActionError,
    currentUserRequest, currentUserSuccess, currentUserError
} from './auth-actions';


Axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

//    "Authorization": `Bearer ${token}` - часто это стандарт на бэк

const token = {
    set(token) {
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },

    unset() {
        Axios.defaults.headers.common.Authorization = ''
    }   }



///////////////////////////////////////////////////////////////////////

export const registrOperations = user => async dispatch => {
    dispatch(registerUserRequest());

    try {
        const response = await Axios.post('/users/signup', user);
        
        token.set(response.data.token)
        dispatch(registerUserSuccess(response.data))        
        
    } catch (error) {
        dispatch(registerUserError(error.message))
    }   };


//    /users/login  
//////////////////////////////////
export const loginOperations = user => async dispatch => {
    dispatch(onLoginRequest());
    try {
        const response = await Axios.post('/users/login', user);

      token.set(response.data.token)
        dispatch( onLoginSuccess(response.data))
        
    } catch (error) {
        dispatch(onLoginError(error.message))
  } }


//   /users/logout
export const logautOperation = () => async dispatch => {

    dispatch(logAuthActionRequest());
    try {
        await Axios.post('/users/logout')  // '/users/logout' - путь на бекенде

        token.unset();
        dispatch(logAuthActionSuccess());
                
    } catch (err) {
        dispatch(logAuthActionError(err.message))
    }
};