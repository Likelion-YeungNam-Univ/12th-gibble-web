import PageNotice from '@/components/common/PageNotice'
import Separator from '@/components/common/Separator'
import ReviewCard from '@/components/review/ReviewCard'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PageController from '../../components/review/PageController';
import { useNavigate, useSearchParams } from 'react-router-dom'
import getAllReviewByPageNum from '@/api/review/getAllReviewByPageNum'
import { ReactComponent as WriteButton } from "@/assets/svg/post-write-button.svg";

const Review = () => {
  
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(()=> {
    const fetchReview = async () => {
      const page = searchParams.get('page') || 0;

      try {
        const result = await getAllReviewByPageNum({page});
        console.log('result',result)
        setReviewList(result.data.content);
      } catch(error) {
        console.log('error',error);
        navigate('/error');
      }
    }
    fetchReview();
  }, [navigate, searchParams])

  return (
    <Wrapper>
        <PageNotice location={['Home','커뮤니티','투명 후기']} />
        <Separator title={'투명후기'} />
        <Container>
          {reviewList.map(el => {
            return <ReviewCard key={el.id} review={el}></ReviewCard>
          })}
        </Container>
        <PageControllerContainer>
          <PageController/>
        </PageControllerContainer>
        <WriteButtonContainer>
          <WriteBtn onClick={() => navigate("/review/new")} />
        </WriteButtonContainer>
    </Wrapper>
  )
}

const WriteBtn = styled(WriteButton)`
  cursor: pointer;
`;

const WriteButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  position : absolute;
  right : 216px;
  bottom : 200px;
`;

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 0 10%;
    width : 100%;
    min-height : 1200px;
    position : relative;
`

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : start;
    gap : calc(4%/2);
    flex-wrap : wrap;
    box-sizing : border-box;
    padding : 0 auto;
`

const PageControllerContainer = styled.div`
  display : flex;
  justify-content : center;
  margin : 30px 0 100px 0;
`

export default Review