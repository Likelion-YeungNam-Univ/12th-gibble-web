import store from "@/store/store";
import { getAuthAxios } from "../authAxios";
import { setAccessToken, setEmail } from "@/store/authSlice";

const logoutHandler = async (dispatch) => {
  const authAxios = getAuthAxios();
  try {
    const response = await authAxios.post("/auth/logout");

    const state = store.getState();
    dispatch(setEmail(null));
    dispatch(setAccessToken(null));

    return {
      statusCode: response.status,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default logoutHandler;
