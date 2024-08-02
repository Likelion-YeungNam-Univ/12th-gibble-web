import React from "react";
import styled from "styled-components";


const Actibity = () => {
  return (
    <Wrapper>
      <List>활동 내역</List>
      <Boxs>
        <Box>
          <Text>기부횟수</Text>
          <Number><span style={{ fontSize: "32px"}}>5</span>번</Number>
        </Box>
        <Box>
          <Text>기부 헌혈증 개수</Text>
          <Number><span style={{  fontSize:"32px" }}>75</span>번</Number>
        </Box>
        <Box>
          <Text>작성글 개수</Text>
          <Number><span style={{  fontSize: "32px" }}>2</span>번</Number>
        </Box>
      </Boxs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
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

const Boxs = styled.div`
  width: 845px;
  height: 135px;
  border-radius: 12px;
  border: 2px #DBDBDB;
  background: #FEF3F4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`;

const Box = styled.div`
  width :150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0px 40px;
`;

const Text = styled.div`
  color: #767676;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;
const Number = styled.div`
  color: var(--main-color, #F42E3D);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.55px;
  margin-top: 5px;
`;


export default Actibity;