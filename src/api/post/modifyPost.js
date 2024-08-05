import { getAuthAxios } from "../authAxios";

const modifyPost = (data, postId) => {
  try {
    const authAxios = getAuthAxios();

    const response = authAxios.put(`/post/upload/${postId}`, data);

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

export default modifyPost;
