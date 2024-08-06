import { getAuthAxios } from "../authAxios";

const deletePost = async (postId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.delete(`/post/${postId}`);

    return {
      statusCode: response.status,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default deletePost;
