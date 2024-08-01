import { getAuthAxios } from "../authAxios";

const getDonators = (postId) => {
  try {
    const authAxios = getAuthAxios();

    const response = authAxios.post(`/post/${postId}/donators`);

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
