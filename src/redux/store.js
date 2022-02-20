import { configureStore } from "@reduxjs/toolkit";
import { authRootReducer } from './auth/auth-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import {  loadingReducer,  rootContactReducer } from './contact/contact-reducer'


const persistConfig = {
  key: 'persistToken',
    storage,
  whiteList: ['token']
}




export const store = configureStore({
    reducer: {
        contacts: rootContactReducer,
        auth: persistReducer(persistConfig, authRootReducer),
        loading: loadingReducer,
   },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),]
});

export const persistor = persistStore(store)