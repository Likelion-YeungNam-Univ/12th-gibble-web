import { getAuthAxios } from "../authAxios";

const getMyPosts = async () => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/user/posts");
    console.log("response", response);

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

export default getMyPosts;
