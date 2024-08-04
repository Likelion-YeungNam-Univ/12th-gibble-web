import React from "react";
import styled from "styled-components";
import Notice from "@/components/post/postPage/Notice";
import Title from "@/components/post/postPage/Title";
import Content from "@/components/post/postPage/Content";

const NoticePage = () => {
  const notice = {
    title: "[공지]글 작성 시 유의사항",
    writer: "관리자",
    content: "글 작성 시 유의사항",
    createdAt: "2024-08-04-",
  };
  return (
    <Wrapper>
      <Notice />
      <Container>
        <Title post={notice} />
        <Content post={notice} />
      </Container>
    </Wrapper>
  );
};

export default NoticePage;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Container = styled.div`
  padding: 0px 342px;
`;
