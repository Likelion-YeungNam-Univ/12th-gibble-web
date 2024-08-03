import Button from "@/components/common/Button";
import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <Wrapper>
      <PageTitle>이벤트 페이지 상세 보기</PageTitle>
      <Image></Image>
      <Button>참여하기</Button>
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
  padding-bottom: 32px;
  border-bottom: 2px solid var(--main-color);
`;

const Image = styled.div`
  max-width: 80%;
  max-height: 100%;
  margin: 60px;
  background-color: #dbdbdb;
`;
