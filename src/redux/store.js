import { configureStore } from "@reduxjs/toolkit";
import {authRootReducer} from './auth/auth-reducer'
import { contactReducer} from './contact/contact-reducer'


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        auth: authRootReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})