import apiClient from "../axios";

const nicknameDupCheck = async (nickname) => {
  try {
    const response = await apiClient.post("/user/dupCheck", null, {
      params: { nickname },
    });

    return { 
      statusCode: response.status,
      isDuplicatedNickname: response.data.isDuplicated,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default nicknameDupCheck;
