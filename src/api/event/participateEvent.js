// 이벤트 참여
import { getAuthAxios } from '../authAxios';
export const participateEvent = async (eventId) => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.post(`/event/${eventId}/participation`);

    console.log("response", response);

    if (response.status === 200) {
      return {
        statusCode: response.status,
        message: response.data.message,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
      message: error.response.data.message,
    };
  }
};

export default participateEvent;
