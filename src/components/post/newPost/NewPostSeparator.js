import React from "react";
import { styled } from "styled-components";

const NewPostSeparator = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Notice>
        <span style={{ color: "var(--main-color" }}>* </span>은 필수 입력
        항목입니다.
      </Notice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const Notice = styled.div`
  font-size: 18px;
  color: var(--gray-color);
  margin-top: 32px;
  margin-bottom: 10px;
  text-align: right;
`;

export default NewPostSeparator;
