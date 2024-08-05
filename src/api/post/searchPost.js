import { getAuthAxios } from "../authAxios";

const searchPost = async (nowPage, size, search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/post", {
      params: { page: nowPage, size, search },
    });
    console.log("게시글 API", response);

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
