import { getAuthAxios } from "../authAxios";

const getReview = (reviewId) => {
  try {
    const authAxios = getAuthAxios();
    const response = authAxios.get(`/${reviewId}`);

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
