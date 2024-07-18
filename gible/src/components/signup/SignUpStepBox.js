import React from "react";
import styled from "styled-components";
import { ReactComponent as chevron } from "@/assets/chevron-right.svg";

const SignUpStepBox = (number) => {
  console.log(number.number);
  return (
    <StepBox>
      {number.number === 1 ? (
        <StepTextBox style={{ color: "red" }}>
          <StepText>STEP 01</StepText>
          <StepDescription>약관동의</StepDescription>
        </StepTextBox>
      ) : (
        <StepTextBox>
          <StepText>STEP 01</StepText>
          <StepDescription>약관동의</StepDescription>
        </StepTextBox>
      )}
      <Chevron />
      {number.number === 2 ? (
        <StepTextBox style={{ color: "red" }}>
          <StepText>STEP 02</StepText>
          <StepDescription>기본정보입력</StepDescription>
        </StepTextBox>
      ) : (
        <StepTextBox>
          <StepText>STEP 02</StepText>
          <StepDescription>기본정보입력</StepDescription>
        </StepTextBox>
      )}

      <Chevron />
      {number.number === 3 ? (
        <StepTextBox style={{ color: "red" }}>
          <StepText>STEP 03</StepText>
          <StepDescription>가입완료</StepDescription>
        </StepTextBox>
      ) : (
        <StepTextBox>
          <StepText>STEP 03</StepText>
          <StepDescription>가입완료</StepDescription>
        </StepTextBox>
      )}
    </StepBox>
  );
};

export default SignUpStepBox;

const StepBox = styled.div`
  color: #767676;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  background: #fef3f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StepTextBox = styled.div`
  display: flex;
  width: 388px;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;

const StepText = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
`;

const StepDescription = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const Chevron = styled(chevron)`
  width: var(--26, 36px);
  height: var(--26, 36px);
  flex-shrink: 0;
`;
