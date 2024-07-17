import React from "react";
import styled from "styled-components";

const SignUp03 = () => {
  return (
    <Box>
      <Center>
        <TitleBox>
          <Title>회원가입</Title>
          <SubTitle>
            <span style={{ color: "red" }}>한 장의 기부</span>가 누군가에겐
            <span style={{ color: "red" }}> 큰 힘</span>이 됩니다.
          </SubTitle>
          <Description>
            기블 홈페이지 회원이 되신다면 더욱 편리하게 서비스 이용이
            가능합니다.
          </Description>
        </TitleBox>
        <StepBox>
          <StepTextBox>
            <StepText>STEP 01</StepText>
            <StepDescription>약관동의</StepDescription>
          </StepTextBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M14.4869 28.8652L25.3521 18L14.4869 7.13485"
              stroke="#767676"
              stroke-width="3.62173"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <StepTextBox>
            <StepText>STEP 02</StepText>
            <StepDescription>기본정보입력</StepDescription>
          </StepTextBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M14.4869 28.8652L25.3521 18L14.4869 7.13485"
              stroke="#767676"
              stroke-width="3.62173"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <StepTextBox style={{ color: "red" }}>
            <StepText>STEP 03</StepText>
            <StepDescription>가입완료</StepDescription>
          </StepTextBox>
        </StepBox>
      </Center>
    </Box>
  );
};

export default SignUp03;

const Box = styled.div`
  padding: 5% 15%;
  display: flex;
  justify-content: center;
`;

const Center = styled.div``;

const TitleBox = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--36, 48px); /* 120% */
  letter-spacing: -1px;
  /* margin-bottom: 8px; */
`;

const Description = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

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
