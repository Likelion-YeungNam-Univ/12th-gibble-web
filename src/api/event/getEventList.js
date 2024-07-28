import { getAuthAxios } from '../authAxios';

export const getEventList = async (region) => {
  const authAxios = getAuthAxios();

  try {
    const response = await authAxios.get('/event', {
      params: { region },
    });

    console.log("response", response);

    if (response.status === 200) {
      const eventList = response.data.event_list.map(event => ({
        eventId: event.eventId,
        title: event.title,
        imageUrl: event.imageUrl,
        region: event.region,
        period: event.period,
      }));

      return {
        statusCode: response.status,
        data: eventList,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default getEventList;
