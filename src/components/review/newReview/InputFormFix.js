import React from "react";
import InputLabel from "../../common/InputLabel";
import styled from "styled-components";

const InputFormFix = ({ text, content }) => {
  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 12px 24px;
  color: #111;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  background-color: #f4f4f4;
  color: black;
`;

const customButtonStyle = styled.div`
  background-color : var(--main-color);
  color : #fff;

`

export default InputFormFix;
