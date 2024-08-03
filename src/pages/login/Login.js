import KakaoLoginButton from "@/components/login/KakaoLoginButton";
import React from "react";
import styled from "styled-components";
import logo from "@/assets/image/main-logo.png";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />
        <Title>방문해 주셔서 감사합니다!</Title>
        <Description>
          기블은 고객님의 정보를 소중하게 생각합니다.
          <br />
          홈페이지 로그인을 통해 소중한 기부활동, 회원 전용 이벤트 등 다양한
          서비스를 이용해 보세요.
        </Description>
        <KakaoLoginButton />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding: 130px 0px 150px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 45%;
`;

const Logo = styled.img`
  width: 148px;
  height: 40px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--40, 50px); /* 125% */
  letter-spacing: -1px;
  margin-top: 20px;
`;

const Description = styled.div`
  color: #767676;
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-top: 10px;
`;

export default Login;
