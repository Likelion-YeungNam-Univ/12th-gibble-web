import { getAuthAxios } from "../authAxios";

const searchEvent = async (nowPage, region, search) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/event", {
      params: { page: nowPage, region, search },
    });
    console.log("이벤트API", response);

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

export default searchEvent;
