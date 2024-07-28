import { getAuthAxios } from '../authAxios';

export const participateInEvent = async (eventId) => {
    const authAxios = getAuthAxios();

    try {
        const result = await authAxios.post(`/event/${eventId}/participation`);

        if (result.status === 200) { // 이벤트 참여 완료
            console.log("참여 완료:", result.data.message);
            return {
                statusCode: result.status,
                message: result.data.message
            };
        } else if (result.status === 404) { // 이벤트 참여 실패
            console.log("이벤트 참여 실패:", result.data.message);
            return {
                statusCode: result.status,
                message: "이벤트 참여 실패"
            };
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "오류 발생";
        console.log(`오류 발생: ${message}`);
        return {
            message: message
        };
    }
};
