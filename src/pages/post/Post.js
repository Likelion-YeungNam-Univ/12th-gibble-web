import PageNotice from "@/components/common/PageNotice";
import React from "react";
import styled from "styled-components";
import Content from "../../components/post/post/Content";

const Post = () => {
  return (
    <Wrapper>
      <PageNotice location={["Home", "커뮤니티", "헌혈증 기부"]}></PageNotice>
      <Container>
        <Content />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 10%;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 10%;
`;

export default Post;
