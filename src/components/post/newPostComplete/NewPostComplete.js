import React from "react";
import styled from "styled-components";
import Notice from "./Notice";
import Title from "./Title";
import Content from "./Content";

const NewPostComplete = () => {
  return (
    <Wrapper>
      <Notice />
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