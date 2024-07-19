import React from "react";
import styled from "styled-components";

const SignUpBtn = ({ setStep }) => {
  const clickHandler = () => {
    setStep(3);
  };

  return (
    <Box type="button" onClick={clickHandler}>
      회원 가입
    </Box>
  );
};

export default SignUpBtn;

const Box = styled.button`
  border-radius: 6px;
  background: #f4f4f4;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 10px;
  border: none;
  width: 100%;
  &:hover {
    background: var(--main-color);
    color: white;
  }
`;
