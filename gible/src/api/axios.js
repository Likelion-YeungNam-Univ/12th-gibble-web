import axios from 'axios'
import { apiServer } from '../config/api'
import store from '@store/store';
import { setAccessToken, setRefreshToken } from '@store/store'

const BASE_URL = apiServer;

export const apiClient = axios.create({
    baseURL: BASE_URL
})

export const authApiClient = axios.create({
    baseURL : BASE_URL
})

authApiClient.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const accessToken = state.authSlice.accessToken;
        if (accessToken)
            config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

authApiClient.interceptors.response.use(
    (response) => { 
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const state = store.getState();
                const refreshToken = state.authSlice.refreshToken;
                const response = await axios.post('/api/token/refresh', {
                    refreshToken
                });
                const { accessToken, newRefreshToken } = response.data;
                store.dispatch(setAccessToken(accessToken));
                store.dispath(setRefreshToken(newRefreshToken));
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return axios(originalRequest);
            } catch (err) {
                store.dispatch(logout());
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
)