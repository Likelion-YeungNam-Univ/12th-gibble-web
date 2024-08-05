import { getAuthAxios } from "../authAxios";

const showPostList = async ({ nowPage, size }) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/post", {
      params: { page: nowPage, size },
    });

    return {
      statusCode: response.status,
      data: response.data,
      pageNum: response.data.pageable.pageNumber,
      totalPages: response.data.totalPages,
      totalElements: response.data.totalElements,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default showPostList;
