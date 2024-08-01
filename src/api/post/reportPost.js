import { getAuthAxios } from "../authAxios";

const reportPost = (postId, userId) => {
  try {
    const authAxios = getAuthAxios();

    const response = authAxios.post(`/post/${postId}/${userId}/report`);

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
