import React, { useEffect } from "react";
import styled from "styled-components";
import Notice from "@/components/review/Notice";
import Title from "@/components/review/Title";
import Content from "@/components/review/Content";
import { useSearchParams } from "react-router-dom";

const CompleteReview = () => {
  const [searchParams] = useSearchParams();
  const reviewId = searchParams.get('review')



  return (
    <Wrapper>
      <Notice />
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
