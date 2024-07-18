import React from "react";
import styled from "styled-components";

const SignUpTitle = () => {
  return (
    <TitleBox>
      <Title>회원가입</Title>
      <SubTitle>
        <span style={{ color: "red" }}>한 장의 기부</span>가 누군가에겐
        <span style={{ color: "red" }}> 큰 힘</span>이 됩니다.
      </SubTitle>
      <Description>
        기블 홈페이지 회원이 되신다면 더욱 편리하게 서비스 이용이 가능합니다.
      </Description>
    </TitleBox>
  );
};

export default SignUpTitle;

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
  margin-bottom: 8px;
`;

const Description = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;
