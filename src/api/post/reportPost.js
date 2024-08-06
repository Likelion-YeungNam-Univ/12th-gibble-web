import { getAuthAxios } from "../authAxios";

const reportPost = async (postId, userId) => {
  try {
    const authAxios = getAuthAxios();

    const response = await authAxios.post(`/post/${postId}/${userId}/report`);

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

export default reportPost;
