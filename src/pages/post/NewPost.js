import React from "react";
import styled from "styled-components";
import PageNotice from "@/components/common/PageNotice";
import PostForm from "@/components/post/newPost/PostForm";
import FormSeparator from "@/components/common/FormSeparator";

const NewPost = () => {
  const location = ["Home", "헌혈증 기부", "게시글 작성"];
  return (
    <Wrapper>
      <Box>
        <PageNotice location={location} />
      </Box>
      <FormSeparator title={"헌혈증 기부 요청 글 작성하기"}/>
      <Form>
        <PostForm />
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

const Box = styled.div`
  width: 1450px

`;


const Form = styled.div`
  box-sizing: border-box;
  margin-top: 38px;
  margin-bottom: 150px;
  padding: 0 86px;
`;

export default NewPost;
