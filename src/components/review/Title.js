import React from "react";
import styled from "styled-components";

const Title = () => {
  return <Wrapper>후원 감사 글 작성하기</Wrapper>;
};

export default Title;

const Wrapper = styled.div`
  margin-top: 72px;
  color: #111;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  display: flex;
  justify-content: left;
`;
