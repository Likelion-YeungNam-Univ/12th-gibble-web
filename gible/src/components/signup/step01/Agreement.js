import React from "react";
import styled from "styled-components";
import CheckBox from "../CheckBox";

const Agreement = ({ text }) => {
  return (
    <Wrapper>
      <CheckBox />
      <Description>
        {text} <span style={{ color: "var(--main-color)" }}>(필수)</span>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Description = styled.div`
  color: #111;
  font-weight: 400;
  font-size: 22px;
`;

export default Agreement;
