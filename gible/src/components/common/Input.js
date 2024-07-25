import React from "react";
import styled, { css } from "styled-components";

const Input = ({
  type,
  placeholder,
  customStyles,
  content,
  setter,
  maxLength,
}) => {
  const setHandler = (e) => {
    if (maxLength) {
      if (e.target.value.length <= maxLength) setter(e.target.value);
    } else setter(e.target.value);
  };

  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      $customStyles={customStyles}
      value={content}
      onChange={(e) => setHandler(e)}
      maxLength={maxLength}
    />
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
