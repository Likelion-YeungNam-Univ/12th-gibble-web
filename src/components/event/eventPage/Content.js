import participateEvent from "@/api/event/participateEvent";
import Button from "@/components/common/Button";
import React from "react";
import styled from "styled-components";

const Content = ({ event }) => {
  const clickHandler = async () => {
    try {
      const result = await participateEvent(event.eventId);
      if (result.statusCode === 200) {
        alert("이벤트 참여 성공!");
      } else if (result.statusCode === 409) {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <PageTitle>이벤트 상세 보기</PageTitle>
      <Title>{event.content}</Title>
      <EventInfo>
        <InfoLabel>작성자</InfoLabel>
        <InfoDesc>관리자</InfoDesc>

        <InfoLabel>이메일</InfoLabel>
        <InfoDesc>gibble@gmail.com</InfoDesc>

        <InfoLabel>작성일</InfoLabel>
        <InfoDesc>{event.createdAt.slice(0, 10)}</InfoDesc>
      </EventInfo>

      <Container>
        <Image src={event.imageUrl} />
        <Button $customStyles={ButtonCustomStyle} onClick={clickHandler}>
          참여하기
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
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

const Title = styled.div`
  width: 100%;
  padding: 27px 46px;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 130.769% */
  letter-spacing: -0.65px;
`;

const EventInfo = styled.div`
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

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 80%;
  max-height: 100%;
  margin: 60px;
  border-bottom: 2px solid #dbdbdb;
  padding: 0 10% 80px 10%;
`;

const ButtonCustomStyle = `
  width : 90%;
  background-color : #f4f4f4;
  color : var(--gray-clor);
  transition : 0.2s;
  &:hover {
    background : var(--main-color);
    color : #fff;
  }
`;
