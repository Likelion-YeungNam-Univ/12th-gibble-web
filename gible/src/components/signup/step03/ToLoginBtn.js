import React from "react";
import styled from "styled-components";

const ToLoginBtn = () => {
  return (
    <Box>
      <Btn type="button">로그인 바로하기</Btn>
    </Box>
  );
};

export default ToLoginBtn;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  display: inline-flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  border: none;
`;
