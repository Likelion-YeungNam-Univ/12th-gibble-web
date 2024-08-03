import { getAuthAxios } from "../authAxios";

const donatePost = async ({ postId, data }) => {
  try {
    const authAxios = getAuthAxios();
    console.log('postId',postId);
    console.log('data',parseInt(data));
    const count = parseInt(data);
    console.log(count);
    const response = await authAxios.post(`post/${postId}/donate`, {
      donateCount : count
    });

    console.log("response", response);

    if (response.status === 200) {
      return {
        statusCode: response.status,
        data: response.data,
      };
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
    };
  }
};

export default donatePost;
