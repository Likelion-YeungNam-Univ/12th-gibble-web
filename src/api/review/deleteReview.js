import { getAuthAxios } from "../authAxios";

const deleteReview = async (reviewId) => {
  const authAxios = getAuthAxios();
  try {
    const response = await authAxios.delete(`/review/${reviewId}`);

    return {
      statusCode: response.status,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default deleteReview;
