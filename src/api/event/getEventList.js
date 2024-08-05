//이벤트 목록
import { getAuthAxios } from "../authAxios";

export const getEventList = async ({ nowPage, region }) => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.get("/event", {
      params: { page: nowPage, region },
    });

    if (response.status === 200) {
      return {
        statusCode: response.status,
        data: response.data,
        pageNum: response.data.pageable.pageNumber,
        totalPages: response.data.totalPages,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default getEventList;
