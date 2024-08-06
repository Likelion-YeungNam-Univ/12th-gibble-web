import { createSlice } from "@reduxjs/toolkit";

// const persistRoot = localStorage.getItem('persist:root');
// const parsedPersistRoot = JSON.parse(persistRoot);
// const auth = JSON.parse(parsedPersistRoot.auth);    // json 파싱
// const accessTokenInLocalStorage = auth?.accessToken || null;

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: null, email: null },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.email = null;
    },
  },
});

export const { setAccessToken, setEmail, logout } = authSlice.actions; // action을 생성해주는 action creator
export default authSlice;
