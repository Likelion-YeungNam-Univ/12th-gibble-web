import { getAuthAxios } from "../authAxios";

const getReceivedDonation = async () => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get("/donation/received-donation");
    console.log("기부자 명단 response", response);

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

export default getReceivedDonation;
