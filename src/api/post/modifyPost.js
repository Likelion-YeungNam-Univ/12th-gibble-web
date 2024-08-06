import { getAuthAxios } from "../authAxios";

const modifyPost = async (data, postId) => {
  try {
    const authAxios = getAuthAxios();

    const response = await authAxios.put(`/post/upload/${postId}`, data);
    console.log('response in mdify', response);
    if (response.status === 200) {
      return {
        postId: response.data.postId,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default modifyPost;
