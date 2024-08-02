import React from "react";
import styled from "styled-components";

const Title = ({ title, name, phoneNumber, date }) => {
  return (
    <Wrapper>
      <PageTitle>헌혈증 기부</PageTitle>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <InfoLabel>작성자</InfoLabel>
        <InfoDesc>{name}</InfoDesc>
        <InfoLabel>전화번호</InfoLabel>
        <InfoDesc>{phoneNumber}</InfoDesc>
      </PostInfo>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  width: 100%;
`;

const PageTitle = styled.div`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  margin-top: 72px;
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: -0.5px;
  padding: 30px 46px;
  border-top: 2px solid var(--main-color);
  margin-top: 42px;
`;

const PostInfo = styled.div`
  padding: 25px 46px;
  flex-shrink: 0;
  background: #f6f6f6;
  border-top: 2px solid #dbdbdb;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
`;

const InfoLabel = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-right: 16px;
`;

const InfoDesc = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-right: 32px;
`;
