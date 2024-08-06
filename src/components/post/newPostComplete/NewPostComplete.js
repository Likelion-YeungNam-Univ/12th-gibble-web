import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Content from "./Content";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import postBanner from "@/assets/image/postBanner.png"

const NewPostComplete = () => {
  return (
    <Wrapper>
      <PageNoticeWithBanner location={['Home','헌혈증 기부','게시글 작성']} banner={postBanner}/>
      <Container>
        <Title />
        <Content />
      </Container>
    </Wrapper>
  );
};

export default NewPostComplete;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0px 342px;
`;