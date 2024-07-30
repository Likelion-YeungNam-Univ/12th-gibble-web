import apiClient from "@/api/axios";
import { setAccessToken, setEmail } from "@/store/authSlice";
import store from '@/store/store';

const loginResponseHandler = async (dispatch, code) => {
    
    try {
        const response = await apiClient.post('auth/kakaologin', {
            code
        });
        console.log('response', response);
        console.log('responseStatus',response.status);

        dispatch(setAccessToken(response.data.accessToken));
        const state = store.getState();
        console.log(state);
        return {
            statusCode: response.status,
            message : response.data.message
        }

    } catch (error) {
        console.log('error',error);
        if(error.response.status === 510){
            dispatch(setEmail(error.response.data.email))
        }

        return {
            statusCode: error.response.status,
            message : error.response.data.message
        }
    }
}

export default loginResponseHandler;