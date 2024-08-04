import { getAuthAxios } from "../authAxios";

const getReceivedDonation = async () => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/donation/received-donation");
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

export default getReceivedDonation;
