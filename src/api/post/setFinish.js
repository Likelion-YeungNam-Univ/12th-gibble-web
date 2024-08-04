import { getAuthAxios } from "../authAxios";

const setFinish = async (postId, isDonationPermitted) => {
  try {
    console.log("postId", postId, "isDonationPermitted", isDonationPermitted);
    const authAxios = getAuthAxios();

    const response = await authAxios.put(
      `/post/${postId}/donation-permitted`,
      null,
      {
        params: { permitted: isDonationPermitted },
      }
    );

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
