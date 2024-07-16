import axios from 'axios';
import { apiServer } from '@config/api'; 
import store from '@/store/store'
import { setAccessToken } from '@/store/authSlice'

export const getAuthAxios = () => {
    const state = store.getState();
    const accessToken = state.authSlice.accessToken;

    const authAxios = axios.create({
        baseURL: apiServer,
        headers: {
            Authorization: accessToken
        }
    }) 

    authAxios.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                const state = store.getState();
                const refreshToken = state.authSlice.refreshToken;

                try {
                    const response = await axios.post(`${apiServer}/token`, {
                        refreshToken: refreshToken,
                    });

                    const newAccessToken = response.data.accessToken;
                    store.dispatch(setAccessToken(newAccessToken));
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    return authAxios(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );

    return authAxios;
}