import apiClient from "../axios"

const signupHandler = async (data) => {
    console.log('data in singupHandler', data);
    try{
        const response = await apiClient.post('/user/signup',{
            data
        })

        console.log(response)
        return {
            statusCode : response.status
        }
    }
    catch(error){
        console.error(error)
        return {
            statusCode : error.response.status
        }
    }
}

export default signupHandler