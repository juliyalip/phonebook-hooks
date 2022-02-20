
import Axios from "axios"
import {
    fetchContactsRequest, fetchContactsSuccess, fetchContactsError,
    addContactRequest, addContactSuccess, addContactError,
deleteContactRequest, deleteContactSuccess, deleteContactError  } from "./contact-actions"



export const fetchContactOperation = () => async dispatch => {

    dispatch(fetchContactsRequest());
    
    try {
        const response = await Axios.get('/contacts');

        dispatch(fetchContactsSuccess(response.data));
        
    } catch(error) {
        dispatch(fetchContactsError(error.message))
    }  }




/////////////////////////////////////////////////////////////
export const addContactOperation = (contact) =>  dispatch => {
  //   const user = {
  //       name: contact.name,
  //       number: contact.number
  //   }  - можно не указывать - есть уже на бэкенде
    
    dispatch(addContactRequest())
      // Axios.post(путь на бэкенде из доков бэка для создания 1-го экземпляра)
    Axios.post('/contacts', contact)
        .then(response => dispatch(addContactSuccess(response.data)))
        .catch(err => dispatch(addContactError(err.message)))
}

////////////////////////////////////////////////
export const deleteContactOperation = (contactId) => dispatch => {
    dispatch(deleteContactRequest());
    // Axios.delete(путь на бэкенде из доков бэка)
    Axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(err => dispatch(deleteContactError(err.message)))
}

