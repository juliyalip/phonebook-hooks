import { createReducer , combineReducers} from "@reduxjs/toolkit";
import {
    addContactSuccess, fetchContactsError, fetchContactsRequest, fetchContactsSuccess,
    deleteContactRequest, deleteContactSuccess, deleteContactError,
filterActionSuccess, filterActionError} from "./contact-actions";



export const contactsReducer = createReducer([], {
    [fetchContactsSuccess]: (_, action) => action.payload,
    
    [addContactSuccess]: (state, action) => [...state, action.payload],
        

    [deleteContactSuccess]: (state, action) => state.filter(contact =>
        contact.id !== action.payload)
}
);



export const filterReducer = createReducer('', {
    [filterActionSuccess]: (_, { payload }) => payload
    
});

const errorContactReducer = createReducer(null, {
    [fetchContactsError]: (_, { payload }) => payload,
    [filterActionError]: (_, {payload}) => payload

})

export const rootContactReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
    error: errorContactReducer
})


export const loadingReducer = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactError]: () => false,
    [deleteContactSuccess]: () => false,
    

});

