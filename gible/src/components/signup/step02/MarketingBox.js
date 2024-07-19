import React from "react";
import styled from "styled-components";
import CheckBox from "../CheckBox";

const MarketingBox = () => {
  return (
    <Box>
      <MarketingTitle>
        마케팅 정보 수신 동의
        <span style={{ color: "#767676" }}>&nbsp;(선택)</span>
      </MarketingTitle>
      <MarketingSubTitle>
        서비스와 커뮤니티 관련 빠른 소식안내, 이벤트 안내 등 다양한 정보를
        제공합니다.
      </MarketingSubTitle>
      <MarketingCheckBoxBox>
        <CheckBox type="checkbox" /> <CheckBoxText>SNS 수신 동의</CheckBoxText>
        <CheckBox type="checkbox" />{" "}
        <CheckBoxText>E-Mail 수신 동의</CheckBoxText>
      </MarketingCheckBoxBox>
    </Box>
  );
};

export default MarketingBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 100px;
`;

const MarketingTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-top: 20px;
`;

const MarketingSubTitle = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const MarketingCheckBoxBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-top: 20px;
`;

const CheckBoxText = styled.div`
  margin-right: 54px;
`;
