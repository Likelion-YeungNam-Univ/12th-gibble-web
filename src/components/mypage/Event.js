import React from "react";
import styled from "styled-components";


const Event = () => {
  return (
    <Wrapper>
      <List>참여이벤트 조회</List>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 900px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  margin-top: 20px;

`;
const List = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 115.385% */
  letter-spacing: -0.65px;
  margin-bottom: 20px;
`;

export default Event;