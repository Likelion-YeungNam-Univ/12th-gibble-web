import apiClient from "../axios";

const dupCheck = async (nickname) => {
  try {

    console.log("전달된 닉네임 : ", nickname);
    if(nickname === "" || nickname || nickname !== undefined){
      return { statusCode : '555', message : '닉네임 입력은 필수입니다.'}
    }

    const response = await apiClient.post("/user/dupCheck", null, {
      params: { nickname },
    });

    console.log("중복 확인 response", response);

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

export default dupCheck;
