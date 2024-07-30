// 이벤트 조회
import { getAuthAxios } from '../authAxios';

export const getEventId = async (eventId) => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.get(`/event/${eventId}`);

    console.log("response", response);

    if (response.status === 200) {
      const event = response.data.event;

      return {
        statusCode: response.status,
        data: {
          eventId: event.eventId,
          title: event.title,
          imageUrl: event.imageUrl,
          content: event.content,
        },
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default getEventId;
