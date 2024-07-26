import apiClient from "../axios";

const getMyDonation = () => {
  try {
    const response = apiClient.get("/donation/my-donation");
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

export default getMyDonation;
