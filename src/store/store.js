import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

 const reducers = combineReducers({
    auth: authSlice.reducer,
 });

 const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
 };

 const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;