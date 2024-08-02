import { getAuthAxios } from "../authAxios";

const deletePost = async (postId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.delete(`/post/${postId}`);

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

export default deletePost;
