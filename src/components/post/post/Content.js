import React from "react";
import PostCategory from "./PostCategory";
import PostList from "./PostList";
import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <PostList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export default Content;
