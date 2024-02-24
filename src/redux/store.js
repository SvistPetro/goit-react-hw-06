import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'
import { persistStore } from 'redux-persist'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
    }
});

export const persistor = persistStore(store);