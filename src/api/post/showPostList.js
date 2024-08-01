import { getAuthAxios } from "../authAxios";

const showPostList = () => {
  try {
    const authAxios = getAuthAxios();
    const response = authAxios.get("/post");

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

export default showPostList;
