import { getAuthAxios } from "../authAxios";

const modifyPost = (data, postId) => {
  /*
    해당 함수 호출 컴포넌트에서 new FormData() 후 formdata에 appned해서 파일및 제목, 내용 업로드 필요
  */
  try {
    const authAxios = getAuthAxios();

    const response = authAxios.put(`/post/upload/${postId}`, data);

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

export default modifyPost;
