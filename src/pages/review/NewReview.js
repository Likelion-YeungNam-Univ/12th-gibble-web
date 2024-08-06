import React from "react";
import styled from "styled-components";
import ReviewForm from "@/components/review/newReview/ReviewForm";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import reviewBanner from "src/assets/image/review-banner.png"
import FormSeparator from "@/components/common/FormSeparator";


const NewReview = () => {
  
  return (
    <PageWrapper>
      <PageNoticeWithBanner location={["Home", "투명 후기", "게시글 작성"]} banner={reviewBanner} />
      <Wrapper>
        <FormSeparator title={"후원 감사 글 작성하기"}/>
        <Form>
          <ReviewForm />
        </Form>
      </Wrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
`

const Wrapper = styled.div`
  width: 100%;
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
