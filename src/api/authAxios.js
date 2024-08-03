import axios from 'axios';
import { apiServer } from '@/config/api';
import store from '@/store/store';
import { setAccessToken } from '@/store/authSlice';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });

    failedQueue = [];
};

export const getAuthAxios = () => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;

    const authAxios = axios.create({
        baseURL: apiServer,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        withCredentials: true
    });

    authAxios.interceptors.response.use(
        (response) => response,
        async (error) => {
            console.log(error);
            const originalRequest = error.config;

            if (error.response.status === 401 && !originalRequest._retry) {
                if (isRefreshing) {
                    return new Promise(function (resolve, reject) {
                        failedQueue.push({ resolve, reject });
                    }).then(token => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return authAxios(originalRequest);
                    }).catch(err => {
                        return Promise.reject(err);
                    });
                }

                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    
                    const response = await axios.post(`${apiServer}/auth/token`, null, { withCredentials: true });
                    const newAccessToken = response.data.body.accessToken;

                    store.dispatch(setAccessToken(newAccessToken));
                    authAxios.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    processQueue(null, newAccessToken);
                    return authAxios(originalRequest);
                } catch (refreshError) {
                    processQueue(refreshError, null);
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        }
    );

    return authAxios;
};
