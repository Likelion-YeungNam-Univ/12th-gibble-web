import { getAuthAxios } from "../authAxios";

const searchReview = async (nowPage, size, search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/review", {
      params: { page: nowPage, size, search },
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
