import apiClient from "@/api/axios";
import { setAccessToken, setEmail } from "@/store/authSlice";
import store from "@/store/store";
import axios from "axios";

const loginResponseHandler = async (dispatch, code) => {
  try {
    const response = await apiClient.post("auth/kakaologin", {
      code,
    });

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.accessToken}`;
    dispatch(setAccessToken(response.data.accessToken));
    const state = store.getState();
    return {
      statusCode: response.status,
      message: response.data.message,
    };
  } catch (error) {
    if (error.response.status === 510) {
      dispatch(setEmail(error.response.data.email));
    }

    return {
      statusCode: error.response.status,
      message: error.response.data.message,
    };
  }
};

export default loginResponseHandler;
