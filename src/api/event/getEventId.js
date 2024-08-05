// 이벤트 조회
import { getAuthAxios } from "../authAxios";

const getEventId = async (eventId) => {
  try {
    const authAxios = getAuthAxios();
    const response = await authAxios.get(`/event/${eventId}`);

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

export default getEventId;
