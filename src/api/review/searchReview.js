import { getAuthAxios } from "../authAxios";

const searchReview = async (search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/review", {
      params: { search },
    });
    console.log("리뷰 API", response);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default searchReview;
