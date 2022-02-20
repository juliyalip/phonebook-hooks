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


////////////////////////////////////
export const getCurrentUser = () => async( dispatch, getState) => {
    //делаем деструктуризацию state.auth.token и переименование на - persistToken
    const { auth: { token: persistToken } } = getState();
    if (!persistToken) {
        console.log('tokena net - go aut')
        return
    }
    token.set(persistToken);
    

    dispatch(currentUserRequest());
    try {
        const response = await Axios.get('/users/current');
        dispatch(currentUserSuccess(response.data))
    } catch (error) {
        dispatch(currentUserError(error.message))
        
    }
}

// параметр getState используется редко - в кешировании и для такого запроса
// при обработке редюсера userReduser при экшене currentUserSuccess
// - в пейлоад прийдет наш юзер, токен ничего не делаем, так как он валидный остался