import React from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "@/assets/svg/circle-check-solid.svg";

const Content = () => {
  return (
    <Wrapper>
      <CheckImg />
      <Title>게시글을 성공적으로 업로드 하였습니다.</Title>
      <Description>
        많은 분들의 관심과 도움이 이어지기를 기대합니다.
      </Description>
      <ButtonsWrapper>
        <CommunityButton onClick={() => console.log("clicked")}>
          커뮤니티 가기
        </CommunityButton>
        <PostButton onClick={() => console.log("clicked")}>
          작성글 보러가기
        </PostButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
`;

const CheckImg = styled(Check)`
  width: 56px;
  height: 56px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
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
  margin-top: 14px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 68px;
  margin-bottom: 150px;
  display: flex;
  gap: 16px;
`;

const CommunityButton = styled.button`
  border: 1px solid var(--main-color);
  background-color: white;
  color: var(--main-color);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px; 
`;

const PostButton = styled.button`
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
  background-color: var(--main-color);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 6px; 
`;
