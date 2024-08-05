import { getAuthAxios } from "../authAxios";

const getDonators = async (postId) => {
  try {
    const authAxios = getAuthAxios();

    const response = await authAxios.get(`/post/${postId}/donators`);
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

export default getDonators;
