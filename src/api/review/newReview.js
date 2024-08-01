import { getAuthAxios } from "../authAxios"

const newReview = async (formData) => {
    // useForm 연결 필요
    try{
        const authAxios = getAuthAxios();
        const response = await authAxios.post('/review/upload', formData,)

        if(response.status === 200){
            console.log(response);
            return {
                statusCode : response.status,
                data : response.data
            }
        }

    } catch(error) {
        return {
            statusCode : error.response.status
        }
    }
}

export default newReview