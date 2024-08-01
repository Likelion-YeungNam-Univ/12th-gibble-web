import { getAuthAxios } from "../authAxios";

const getReview = async (reviewId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get(`review/${reviewId}`);

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

export default getReview;
