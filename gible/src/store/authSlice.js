import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { accessToken: null, refreshToken: null },
    reducers: {
        setAccessToken:(state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        }
    }
})

export const { setAccessToken, setRefreshToken, logout } = authSlice.actions; // action을 생성해주는 action creator 
export default authSlice.reducer;