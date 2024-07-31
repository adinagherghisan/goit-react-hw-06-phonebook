// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './features/contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], 
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
