import React from "react";
import styled from "styled-components";
import CheckImg from "./CheckImg";

const Welcome = () => {
  return (
    <>
      <CheckImg />
      <WelcomeTitle>
        <span style={{ color: "var(--main-color)" }}>기블</span>의 회원이
        되신것을 환영합니다{" "}
      </WelcomeTitle>
      <WelcomeSubTitle>
        홍길동님의 회원가입이 성공적으로 완료 되었습니다.
        <br />
        로그인 후 저희 서비스를 편하게 이용해 주세요.
      </WelcomeSubTitle>
    </>
  );
};

export default Welcome;

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
