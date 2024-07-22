import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <>
        <Title>회원 정보 입력</Title>
        <GuideMessage>
          <span style={{ color: "var(--main-color)" }}>*</span>
          은 필수 입력 항목입니다.
        </GuideMessage>
    </>
  );
};



const Title = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  margin-top : 40px;
  `;

const GuideMessage = styled.div`
  display: flex;
  justify-content: right;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px);
  letter-spacing: -0.45px;
  `;

export default Description;