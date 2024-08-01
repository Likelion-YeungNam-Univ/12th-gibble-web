import { getAuthAxios } from "../authAxios";

const showPostList = async ({ page, size }) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/post", { params: { page, size } });

    if (response.status === 200) {
      console.log("response", response.data);
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

export default showPostList;
