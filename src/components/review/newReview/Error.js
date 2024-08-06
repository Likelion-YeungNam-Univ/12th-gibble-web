import React from "react";
import styled from "styled-components";

const Error = ({ text }) => {
  return (
    <Wrapper>
      <Content>{text}</Content>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  padding: 5px;
  color: var(--main-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;
