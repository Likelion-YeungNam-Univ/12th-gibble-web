import React from "react";
import styled from "styled-components";
import DonationBar from "./DonationBar";

const Title = ({ post }) => {
  return (
    <Wrapper>
      <PageTitle>헌혈증 기부</PageTitle>
      <PostTitle>{post.title}</PostTitle>
      <PostInfo>
        <InfoConatiner>
          <InfoLabel>작성자</InfoLabel>
          <InfoDesc>{post.writer}</InfoDesc>
          {post.email && (
            <>
              <InfoLabel>이메일</InfoLabel>
              <InfoDesc>{post.email}</InfoDesc>
            </>
          )}
          <InfoLabel>작성일</InfoLabel>
          <InfoDesc>{post.createdAt.slice(0, 10)}</InfoDesc>
        </InfoConatiner>
        {post.donatedCard !== undefined && post.wantedCard !== undefined && (
          <>
            <Donation>
              <InfoLabel>기부 현황</InfoLabel>
              <InfoDesc>{`${post.donatedCard} / ${post.wantedCard}`}</InfoDesc>
              <DonationBar
                wanted={post.wantedCard}
                donated={post.donatedCard}
              />
            </Donation>
          </>
        )}
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
  justify-content: space-between;
`;

const InfoConatiner = styled.div`
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

const Donation = styled.div`
  display: flex;
`;
