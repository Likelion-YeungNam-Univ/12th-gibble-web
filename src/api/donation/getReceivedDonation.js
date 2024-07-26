import apiClient from "../axios";

const getReceivedDonation = () => {
  try {
    const response = apiClient.get("/donation/received-donation");
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
