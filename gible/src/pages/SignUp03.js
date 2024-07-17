import React from "react";
import styled from "styled-components";

const SignUp03 = () => {
  return (
    <Box>
      <Center>
        <TitleBox>
          <Title>회원가입</Title>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={56}
        height={56}
      >
        <path
          fill="#f42e3d"
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
      </svg>
      <WelcomeTitle>
        <span style={{ color: "red" }}>기블</span>의 회원이 되신것을 환영합니다{" "}
      </WelcomeTitle>
      <WelcomeSubTitle>
        홍길동님의 회원가입이 성공적으로 완료 되었습니다.
        <br />
        로그인 후 저희 서비스를 편하게 이용해 주세요.
      </WelcomeSubTitle>
      <GuideMessage>
        *회원가입 내역 확인 및 수정은{" "}
        <span style={{ color: "red" }}>마이페이지 &gt; 회원정보수정</span> 에서
        가능합니다.
      </GuideMessage>
      <ToLoginBtn type="button">로그인 바로하기</ToLoginBtn>
    </Box>
  );
};

export default SignUp03;

const Box = styled.div`
  padding: 5% 15%;
  display: flex;
  align-items: center;
  flex-direction: column;
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

const StepBox = styled.div`
  color: #767676;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  background: #fef3f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 58px;
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

const WelcomeTitle = styled.div`
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 58px; /* 120.833% */
  letter-spacing: -1.2px;
  margin-top: 38px;
  margin-bottom: 24px;
`;

const WelcomeSubTitle = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 131.818% */
  letter-spacing: -0.55px;
  margin-bottom: 78px;
`;

const GuideMessage = styled.div`
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  background: #f4f4f4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-bottom: 48px;
`;

const ToLoginBtn = styled.button`
  display: inline-flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color, #f42e3d);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  border: none;
`;
