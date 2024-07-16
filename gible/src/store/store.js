import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer
    }
});

export default store;