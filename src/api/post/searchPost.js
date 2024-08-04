import { getAuthAxios } from "../authAxios";

const searchPost = async (search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/post", {
      params: { search },
    });

    console.log("response", response);
    return {
      statusCode: response.status,
      dtaa: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default searchPost;
