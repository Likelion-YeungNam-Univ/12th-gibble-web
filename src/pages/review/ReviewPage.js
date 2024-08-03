import deleteReview from '@/api/review/deleteReview';
import getReview from '@/api/review/getReview';
import Button from '@/components/common/Button';
import ReviewInfo from '@/components/review/reviewPage/ReviewInfo';
import Loading from '@/layouts/Loading';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '@/assets/svg/delete.svg'

const ReviewPage = () => {


    const { reviewId } = useParams();
    const [ review, setReview ] = useState();
    const [ isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=> {
      const fetchReview = async () => {
        try {
            const result = await getReview(reviewId);
            console.log(result);
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
    
    
    const deleteHandler = async () => {
        try {
            const result = await deleteReview(reviewId);

            if(result.statusCode === 200){
                navigate('/review');
            }

            else {
                navigate('/error');
            }
        } catch (error) {
            navigate('/error');
        }
    }

    if(isLoading)
        return <Loading/>


  return (
      <Wrapper>
            testtest
          <PageTitle>투명 후기</PageTitle>
          <Title>{review.title}</Title>
          <ReviewInfo info={{
              writer: review.nickname, email: review.email, createdAt: review.createAt
          }} />
          <Description>
              {review.content}

              <Image src={review.imageUrl}></Image>

              <DeleteContainer onClick={deleteHandler}> 
                <DeleteText>글 삭제</DeleteText>
                <DeleteIcon/>
              </DeleteContainer>
          </Description>
          {/* 이미지가 null이 아니면 이미지 보여주기 */}

          <ButtonContainer>
            <Button $customStyles={buttonSytle} onClick={() => navigate('/review')}>뒤로가기</Button>
          </ButtonContainer>
    </Wrapper>
  )
}

const DeleteContainer = styled.div`
    width : 110px;
    align-self : flex-end;
    box-sizing : border-box;
    color: #767676;
    font-family: Pretendard;
    font-size: 18px;
    box-sizing : border-box;
    padding : 5px 10px;
    border-radius : 6px;
    display : flex;
    justify-content : center;
    gap: 6px;
    cursor: pointer;
`
const DeleteText = styled.div`
    color: #767676;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`



const buttonSytle = `
    background: none;
    border :  1px solid var(--gray-color);
    color : var(--gray-color);
`

const ButtonContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    box-sizing : border-box;
    padding : 5px;
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
    margin-bottom : 50px;
    display : flex;
    flex-direction : column;
`

const Image = styled.img`
    margin-top : 30px;
    scale : 0.8;
    margin-bottom : 110px;
`

export default ReviewPage
