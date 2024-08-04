import { getAuthAxios } from "../authAxios";

const uploadPost = async (data) => {
  try {
    const authAxios = getAuthAxios(data);

    const response = await authAxios.post("/post/upload", data);
    console.log("게시글 업로드 완료", response);

    if (response.status === 201) {
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
