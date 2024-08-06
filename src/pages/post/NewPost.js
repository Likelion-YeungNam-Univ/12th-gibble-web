import React from "react";
import styled from "styled-components";
import PageNotice from "@/components/common/PageNotice";
import PostForm from "@/components/post/newPost/PostForm";
import FormSeparator from "@/components/common/FormSeparator";

const NewPost = () => {
  const location = ["Home", "헌혈증 기부", "게시글 작성"];
  return (
    <Wrapper>
      <PageNotice location={location} />
      <Container>
        <FormSeparator title={"헌혈증 기부 요청 글 작성하기"} />
        <Form>
          <PostForm />
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 14%;
`;

const Container = styled.div`
  width: 1238px;
  margin: 0 auto;
`;

const Form = styled.div`
  box-sizing: border-box;
  margin-top: 38px;
  margin-bottom: 150px;
`;

export default NewPost;
