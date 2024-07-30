import React from "react";
import styled, { css } from "styled-components";

const InputLabel = ({ text, customStyles, isEssential, condition }) => {
  return (
    <Wrapper $customStyles={customStyles}>
      {text}
      {isEssential ? (
        <span style={{ color: "var(--main-color)" }}> * </span>
      ) : null}
      {condition ? (
        <span style={{ color: "var(--gray-color)" }}>&nbsp;(30자 이하)</span>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-top: 12px;

  ${(props) =>
    props.$customStyles &&
    css`
      ${props.$customStyles}
    `}
`;

export default InputLabel;
