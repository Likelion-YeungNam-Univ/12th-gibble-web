import { getAuthAxios } from "../authAxios";

const showPost = async (postId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get(`/post/${postId}`);

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

export default showPost;
