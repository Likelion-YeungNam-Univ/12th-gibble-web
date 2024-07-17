import axios from "./axios";

const getEventList = async () => {
  try {
    const data = await axios.get("/event");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getEvent = async (eventId) => {
  try {
    const data = await axios.get("/event", {
      params: {
        eventId: eventId,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const postEventParticipation = async ({
  name,
  phoneNumber,
  eventId,
  userId,
}) => {
  try {
    const data = await axios.post(
      "/event",
      {
        body: {
          name: name,
          phoneNumber: phoneNumber,
        },
      },
      {
        params: {
          eventId: eventId,
          userId: userId,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
