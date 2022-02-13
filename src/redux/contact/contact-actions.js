import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContatcError = createAction('addContactError');


const actions = { 
    addContactRequest,
    addContactSuccess,
    addContatcError
}

export default actions;