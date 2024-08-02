import getReview from '@/api/review/getReview';
import Button from '@/components/common/Button';
import ReviewInfo from '@/components/review/reviewPage/ReviewInfo';
import Loading from '@/layouts/Loading';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

const ReviewPage = () => {
//     const { reviewId } = useParams();
//     console.log('reviewId',reviewId)
//     const [ review, setReview] = useState();
//     const [ isLoading, setIsLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(()=> {
//       const fetchReview = async () => {
//         try {
//             const result = await getReview(reviewId);
//             setReview(result.data);
//         } catch (error) {
//             console.error(error);
//             navigate('/error');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     if (reviewId) {
//         fetchReview();
//     }
// }, [reviewId, navigate]);
    
//     if(isLoading)
    //           return <Loading/>
    

    const navigate = useNavigate();


  return (
      <Wrapper>
          <PageTitle>투명 후기</PageTitle>
          <Title>감사합니다</Title>
          <ReviewInfo info={{
              writer: '홍길' + '*', email: 'test@naver.com', createdAt: '2024-07-31'
          }} />
          <Description>
              안녕하세요 너무 감사합니다..<br />35세 남성입니다.<br /><br /> 덕분에 살았습니다.
              <TmpImage/>
          </Description>
          {/* 이미지가 null이 아니면 이미지 보여주기 */}
          <Button $customStyles={buttonSytle} onClick={() => navigate('/review')}>뒤로가기</Button>

    </Wrapper>
  )
}

const buttonSytle = `
    background: none;
    border :  1px solid var(--gray-color);
    color : var(--gray-color);
`

const Wrapper = styled.div`
    width : 100%;
    box-sizing : border-box;
    padding : 80px 10%;
`

const PageTitle = styled.div`
    font-size : 26px;
    font-weight : bold;
    height : 40px;
    padding-bottom : 10px;
    border-bottom : 2px solid var(--main-color);
`

const Title = styled.div`
    font-size : 20px;
    box-sizing : border-box;
    padding : 30px 46px;
`

const Description = styled.div`
    color: #111;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 145.455% */
    letter-spacing: -0.55px;
    box-sizing : border-box;
    padding : 46px;
    border-bottom : 1px solid var(--gray-color);
    margin-bottom : 24px;
`

const TmpImage = styled.div`
    height : 600px;
    background-color : #111;
    margin-top : 30px;
`;


export default ReviewPage
