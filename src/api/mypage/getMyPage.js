import { getAuthAxios } from "../authAxios";

const getMyPage = async () => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/user");

    if (response.status === 200) {
      return {
        statusCode: response.status,
        data: response.data,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default getMyPage;
