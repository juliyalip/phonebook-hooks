import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction('contact/fetchContactRequest')
export const fetchContactsSuccess = createAction('contact/fetchContactSuccess')
export const fetchContactsError = createAction('contact/fetchContatcError')

export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');


export const deleteContactRequest = createAction('contact/deleteContactRequest');
export const deleteContactSuccess = createAction('contact/deleteContactSuccess');
export const deleteContactError = createAction('contatct/deleteContactError')

export const filterActionSuccess = createAction('contact/filterSuccess');
export const filterActionError = createAction('contact/filterError')