import React, { useEffect } from "react";
import styled from "styled-components";
import PageNotice from "@/components/common/PageNotice";
import NewReviewSeparator from "@/components/review/newReview/NewReivewSeparator";
import ReviewForm from "@/components/review/newReview/ReviewForm";


const NewReview = () => {
  const location = ["Home", "커뮤니티", "투명 후기", "게시글 작성"];
  

  return (
    <Wrapper>
      <PageNotice location={location} />
      <NewReviewSeparator title={"후원 감사 글 작성하기 "} />
      <Form>
        <ReviewForm />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 14%;
`;

const Form = styled.div`
  box-sizing: border-box;
  margin-top: 38px;
  margin-bottom: 150px;
  padding: 0 86px;
`;

export default NewReview;
