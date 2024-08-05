import { getAuthAxios } from "../authAxios";

const searchPost = async (search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/post", {
      params: { search },
    });

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

export default searchPost;
