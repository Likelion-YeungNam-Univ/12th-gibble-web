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
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // 특정 경로에 대한 직렬화 검사를 무시합니다.
          ignoredActions: ['persist/PERSIST'],
          ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          ignoredPaths: ['register', 'rehydrate'],
        },
      }),
});

export default store;