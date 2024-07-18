import React from "react";
import styled from "styled-components";
import SignUpTitle from "@/components/signup/SignUpTitle";
import SignUpStepBox from "@/components/signup/SignUpStepBox";

import { ReactComponent as check } from "@/assets/circle-check-solid.svg";

const SignUp03 = () => {
  return (
    <Box>
      <Center>
        <SignUpTitle />
        <SignUpStepBox number={3} />
      </Center>
      <Check />
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

const Check = styled(check)`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
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
