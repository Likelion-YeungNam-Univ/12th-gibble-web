import React from "react";
import styled from "styled-components";

const InformationTitle = () => {
  return (
    <>
      <InformationTitleBox>
        <Title>회원 정보 입력</Title>
        <GuideMessage>
          <span style={{ color: "var(--main-color)" }}>*</span>
          <span>은 필수 입력 항목입니다.</span>
        </GuideMessage>
      </InformationTitleBox>
      <StyledHr1 />
    </>
  );
};

export default InformationTitle;

const InformationTitleBox = styled.div`
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
  margin-bottom: 20px;
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

const StyledHr1 = styled.hr`
  border: none;
  height: 1px;
  background: var(--main-color);
`;
