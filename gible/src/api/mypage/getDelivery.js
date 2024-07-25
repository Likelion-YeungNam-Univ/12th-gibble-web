import apiClient from "../axios";

const getDelivery = () => {
  try {
    const response = apiClient.get("/user/delivery");
    console.log("response", response);

    if (response.status === 200) {
      return {
        statusCode: response.status,
        cata: response.data,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default getDelivery;
