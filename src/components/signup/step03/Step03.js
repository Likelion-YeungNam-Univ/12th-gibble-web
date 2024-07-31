import React from "react";
import Button from "@/components/common/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Check } from "@/assets/svg/circle-check-solid.svg";

const Step03 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CheckImg />
      <Title>
        <span style={{ color: "var(--main-color)" }}>기블</span>의
        회원이되신것을 환영합니다
      </Title>
      <Description>
        홍길동님의 회원가입이 성공적으로 완료 되었습니다.
        <br />
        로그인 후 저희 서비스를 편하게 이용해 주세요.
      </Description>
      <Notice>
        * 회원가입 내역 확인 및 수정은&nbsp;
        <span style={{ color: "var(--main-color)" }}>
          마이페이지 &gt; 회원정보수정
        </span>
        에서 가능합니다.
      </Notice>
      <Button onClick={() => navigate("/login")}>로그인 바로하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CheckImg = styled(Check)`
  width: 56px;
  height: 56px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 58px; /* 120.833% */
  letter-spacing: -1.2px;
  margin-top: 38px;
`;

const Description = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 131.818% */
  letter-spacing: -0.55px;
  margin: 50px 0;
`;

const Notice = styled.div`
  box-sizing: border-box;
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

export default Step03;
