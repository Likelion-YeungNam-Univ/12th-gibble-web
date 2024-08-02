import { getAuthAxios } from "../authAxios";

const uploadPost = async (data) => {
  try {
    const authAxios = getAuthAxios(data);

    const response = await authAxios.post("/post/upload", data);
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

export default uploadPost;
