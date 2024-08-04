import { getAuthAxios } from "../authAxios"

const newReview = async (formData) => {
    // useForm 연결 필요
    try{
        const authAxios = getAuthAxios();
        const response = await authAxios.post('/review/upload', formData,)

        
            return {
                statusCode : response.status,
                reviewId : response.data.reviewId
            }

    } catch(error) {
        return {
            statusCode : error.response.status
        }
    }
}

export default newReview