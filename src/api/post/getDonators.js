import { getAuthAxios } from "../authAxios";

const getDonators = async (postId) => {
  console.log('postId',postId);
  try {
    const authAxios = getAuthAxios();

    const response = await authAxios.get(`/post/${postId}/donators`);
    console.log('response in getDonators',response)
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

export default getDonators;
