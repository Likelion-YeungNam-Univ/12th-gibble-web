import React from "react";
import styled, { css } from "styled-components";

const Input = ({ type, placeholder, value, maxLength, customStyles }) => {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      maxLength={maxLength}
      $customStyles={customStyles}
    ></InputComponent>
  );
};

const InputComponent = styled.input`
  width: 420px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  font-family: pretendard;
  &::placeholder {
    color: #dbdbdb;
  }

  ${(props) =>
    props.$customStyles &&
    css`
      ${props.$customStyles}
    `}

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
