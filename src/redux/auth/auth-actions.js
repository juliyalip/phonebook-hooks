import { createAction } from "@reduxjs/toolkit";

export const registerUserRequest = createAction('auth/registerUserRequest');
export const registerUserSuccess = createAction('auth/registerUserSuccess');
export const registerUserError = createAction('auth/registerUserError');

export const onLoginRequest = createAction('auth/onLoginRequest');
export const onLoginSuccess = createAction('auth/onLoginSuccess');
export const onLoginError = createAction('auth/onLoginError');

export const tokenUserRequest = createAction('auth/tokenRequest');
export const tokenUserSuccess = createAction('auth/tokenSuccess');
export const tokenUserError = createAction('auth/tokenError');

export const logAuthActionRequest = createAction('auth/logAutRequest');
export const logAuthActionSuccess = createAction('auth/logAuthSuccess');
export const logAuthActionError = createAction('auth/logAuthError');

export const currentUserRequest = createAction('auth/currentUserRequest');
export const currentUserSuccess = createAction('auth/currentUserSuccess');
export const currentUserError = createAction('auth/currentUserError');
