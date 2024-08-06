import PageNotice from "@/components/common/PageNotice";
import React from "react";
import styled from "styled-components";
import Content from "../../components/post/post/Content";

const Post = () => {
  return (
    <Wrapper>
      <PageNotice location={["Home", "헌혈증 기부"]}></PageNotice>
      <ContentContainer>
        <Container>
          <Content />
        </Container>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 270px;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 1238px;
  margin: 0px auto;
`;

const Container = styled.div``;

export default Post;
