import apiClient from "@/api/axios";
import loginConfig from "@/config/loginConfig";
import { setAccessToken, setRefreshToken } from "@/store/authSlice";
import store from '@/store/store';

const loginResponseHandler = async (dispatch, code) => {
    
    try {
        const response = await apiClient.post('auth/kakaologin', {
            clientId: loginConfig.REST_API_KEY,
            code
        });
        console.log('response', response);
        console.log('responseStatus',response.status);

        if (response.data.statusCode === 510) { // 추가 정보 필요
            dispatch(setAccessToken(response.data.accessToken));
            dispatch(setRefreshToken(response.data.refreshToken));
            const state = store.getState();
            console.log(state);
            return {
                statusCode: response.data.statusCode,
                // message
            }
        }
        else {                                  // 로그인
            return {
                statusCode: response.status,
                // message
            }
        }

    } catch (error) {
        console.log('error',error);
        return {
            statusCode: error.response.status
            // message
        };
    }
}

export default loginResponseHandler;