import apiClient from "../axios";

const getMyPosts = () => {
  try {
    const response = apiClient.get("/user/posts");
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
