import { getAuthAxios } from '../authAxios';

export const getEventlistPage = async () => {
    const authAxios = getAuthAxios();

    try {
        const result = await authAxios.get('/event');

        if (result.status === 200) { // 조회 성공
            const eventList = result.data.event_list;
            const events = eventList.map((event) => {
                const eventId = event.eventId;
                const title = event.title;
                const imageUrl = event.imageUrl;

                console.log(eventId, title, imageUrl);

                return {
                    eventId,
                    title,
                    imageUrl
                };
            });

            return events;

        } else if (result.status === 404) {
            console.log("이벤트 목록 조회 실패");
            return [];
        } else {
            console.log("다른 응답 코드", result.status);
            return [];
        }
        
    } catch (error) { // 네트워크 오류 등 예외 상황 발생 시 실행
        if (error.response) {
            console.log(`오류 발생: ${error.response.status}`, error.response.data);
        }
        return [];
    }
};
