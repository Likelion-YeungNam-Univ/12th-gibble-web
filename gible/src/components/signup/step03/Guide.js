import React from "react";
import styled from "styled-components";

const Guide = () => {
  return (
    <Box>
      <GuideMessage>
        *회원가입 내역 확인 및 수정은
        <span style={{ color: "var(--main-color)" }}>
          마이페이지 &gt; 회원정보수정
        </span>
        에서 가능합니다.
      </GuideMessage>
    </Box>
  );
};

export default Guide;

const Box = styled.div`
  display: flex;
  justify-content: center;
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
