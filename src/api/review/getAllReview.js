import apiClient from "@/api/axios"

const getAllReview = () => {
    try{
        const response = apiClient.get('/review');
        console.log('response',response)

        if(response.status === 200){
            return {
                statusCode : response.status,
                data : response.data
            }
        }
    }
    catch(error){
        return {
            statusCode : error.response.status
        }
    }
        

}

export default getAllReview