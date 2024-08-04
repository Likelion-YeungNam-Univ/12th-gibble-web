import React from "react";
import styled from "styled-components";
import PageNotice from "@/components/common/PageNotice";
import PostForm from "@/components/post/modifyPost/PostForm";
import NewPostSeparator from "../../components/post/newPost/NewPostSeparator";

const ModifyPost = () => {
  const location = ["Home", "커뮤니티", "헌혈증 기부", "게시글 작성"];
  return (
    <Wrapper>
      <PageNotice location={location} />
      <NewPostSeparator title={"헌혈증 기부 요청 글 작성하기"} />
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

const Form = styled.div`
  box-sizing: border-box;
  margin-top: 38px;
  margin-bottom: 150px;
  padding: 0 86px;
`;

export default ModifyPost;
