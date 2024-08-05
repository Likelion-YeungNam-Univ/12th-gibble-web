// 이벤트 참여
import { getAuthAxios } from "../authAxios";
export const participateEvent = async (eventId) => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.post(`/event/${eventId}/participation`);

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

export default participateEvent;
