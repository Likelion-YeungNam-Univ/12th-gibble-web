import { getAuthAxios } from "../authAxios";

const getParticipation = () => {
  try {
    const authAxios = getAuthAxios();
    const response = authAxios.get("/user/participation-event");
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

export default getParticipation;
