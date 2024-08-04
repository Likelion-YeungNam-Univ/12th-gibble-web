import { getAuthAxios } from "../authAxios";

const donatePost = async ({ postId, donateCount }) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.post(`post/${postId}/donate`, {
      donateCount
    });

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
