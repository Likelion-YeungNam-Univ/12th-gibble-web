import React from "react";
import styled from "styled-components";
import Title from "@/components/review/Title";
import Content from "@/components/review/Content";
import { useSearchParams } from "react-router-dom";
import PageNoticeWithBanner from '@/components/common/PageNoticeWithBanner';
import reviewBanner from "@/assets/image/review-banner.png"

const CompleteReview = () => {
  const [searchParams] = useSearchParams();
  const reviewId = searchParams.get('review')



  return (
    <Wrapper>
      <PageNoticeWithBanner location={['Home','투명 후기', '게시글 작성']} banner={reviewBanner}/>
      <Container>
        <Title />
        <Content review={reviewId} />
      </Container>
    </Wrapper>
  );
};

export default CompleteReview;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0px 342px;
`;
