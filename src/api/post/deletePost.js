import { getAuthAxios } from "../authAxios";

const deletePost = async (postId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.delete(`/post/${postId}`);
    console.log("response", response);

    return {
      statusCode: response.status,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.response.status,
    };
  }
};

export default deletePost;
