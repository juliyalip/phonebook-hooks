import { combineReducers, createReducer} from "@reduxjs/toolkit";
import {
    registerUserSuccess,  registerUserError, onLoginSuccess,
    onLoginError,   
    logAuthActionSuccess , logAuthActionError, currentUserSuccess,  currentUserError
} from './auth-actions';




const initionUser = {
    name: '',
    email: ''
}// из доков.

 const userReduser = createReducer(initionUser, {
     [registerUserSuccess]: (_, action) => action.payload.user,
     [onLoginSuccess]: (_, { payload }) => payload.user,
     [logAuthActionSuccess]: () => initionUser,             // разлогинились - стейт в начальное состояние
     [currentUserSuccess]: (_, {payload}) => payload
});

const tokenReduser = createReducer(null,
    {
        // когда мы зарегистрировались - экшен registerUserSuccess мы: 
        [registerUserSuccess]: (_, { payload }) => payload.token,
        [onLoginSuccess]: (_, { payload }) => payload.token,
        [logAuthActionSuccess]: () => null
    });


    // абстракция для переиспользования
const setError =  (_, { payload }) => payload

const errorRegisterReduser = createReducer(null, {
   [ registerUserError]: setError,
    [onLoginError]: setError,
    [logAuthActionError]: setError,
    [currentUserError]: setError
}) 


export const authRootReducer = combineReducers({
  
  user: userReduser,
    token: tokenReduser,
    error: errorRegisterReduser
  
    
    }
);


