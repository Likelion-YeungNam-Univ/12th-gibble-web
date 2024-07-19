import React from "react";
import styled from "styled-components";

const NextBtn = ({ setStep }) => {
  const clickHandler = () => {
    setStep(2);
  };

  return (
    <Box>
      <Button type="button" onClick={clickHandler}>
        다음
      </Button>
    </Box>
  );
};

export default NextBtn;

const Box = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 30px;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  border: none;
  width: 160px;
  height: 54px;
`;
