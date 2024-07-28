import { getAuthAxios } from "../authAxios";

export const getEventId = async (eventId) => {
    const authAxios = getAuthAxios();

    try {
        const result = await authAxios.get(`/event/${eventId}`);

        if (result.status === 200) { // 조회 성공
            const event = result.data.event;
            const eventId = event.eventId;
            const title = event.title;
            const imageUrl = event.imageUrl;
            const content = event.content;

            console.log(eventId, title, imageUrl, content);

            return { eventId,title,imageUrl,content};

        } else if (result.status === 404) {
            console.log("이벤트 조회 실패");
            return null;
        } else {
            console.log("다른 응답 코드", result.status);
            return null;
        }
    }
    
    catch (error) { // 그 예외인 오류: 네트워크부터 오류가 났을 때 실행
        if (error.response) {
            console.log(`오류 발생: ${error.response.status}`, error.response.data);
        }
        return null;
    }
};
