import apiClient from "../axios"

const getReview = (reviewId) => {
    try{
        const response = apiClient.get(`/${reviewId}`);

        if(response.status === 200){
            return {
                statusCode : response.status,
                data : response.data
            }
        }
    } catch(error){
        return {
            statusCode : error.response.status
        }
    }

}

export default getReview