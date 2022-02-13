import { createReducer } from "@reduxjs/toolkit";
import actions from "./contact-actions";



export const contactReducer = createReducer([], {
    [actions.addContactSuccess]: (state, {payload}) => [...state, payload]
}
)