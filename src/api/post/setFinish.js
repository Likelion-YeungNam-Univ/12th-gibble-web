import { getAuthAxios } from "../authAxios";

const setFinish = async (postId, isPermitted) => {
  try {
    const authAxios = getAuthAxios();
    console.log("postId", postId, "isPermitted", isPermitted);
    const response = await authAxios.put(`/post/${postId}/donation-permitted`, {
      params: { permitted: isPermitted },
    });

    if (response.status === 200) {
      return {
        statusCode: response.status,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default setFinish;
