import { getAuthAxios } from "../authAxios";

const donatePost = async ({ postId, data }) => {
  try {
    const authAxios = getAuthAxios();

    const response = await authAxios.post(`post/${postId}/donate`, {
      data,
    });

    console.log("response", response);

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

export default donatePost;
