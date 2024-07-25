import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { accessToken: null},
    reducers: {
        setAccessToken:(state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    }
})

export const { setAccessToken, logout } = authSlice.actions; // action을 생성해주는 action creator 
export default authSlice;