import { getAuthAxios } from "../authAxios";

const getDelivery = () => {
  try {
    const authAxios = getAuthAxios();
    const response = authAxios.get("/user/delivery");

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
