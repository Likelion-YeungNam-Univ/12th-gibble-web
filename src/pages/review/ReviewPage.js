import getReview from '@/api/review/getReview';
import Loading from '@/layouts/Loading';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReviewPage = () => {
    const { reviewId } = useParams();
    console.log('reviewId',reviewId)
    const [ review, setReview] = useState();
    const [ isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=> {
      const fetchReview = async () => {
        try {
            const result = await getReview(reviewId);
            setReview(result.data);
        } catch (error) {
            console.error(error);
            navigate('/error');
        } finally {
            setIsLoading(false);
        }
    };

    if (reviewId) {
        fetchReview();
    }
}, [reviewId, navigate]);
    
    if(isLoading)
          return <Loading/>

  return (
    <div>123</div>
  )
}

export default ReviewPage