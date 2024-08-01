import { getAuthAxios } from "../authAxios";

const getAllReviewByPageNum = async ({page}) => {
    try{
        const authAxios = getAuthAxios()
        const response = await authAxios.get('/review',{
            params : {page}
        });

        if(response.status === 200){
            console.log(response);
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

export default getAllReviewByPageNum