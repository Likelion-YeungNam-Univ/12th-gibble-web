import React from "react";
import styled from "styled-components";

const BlueBloodIntro = () => {
  return (
    <Wrapper>
      <Box>
        <Image
          src={require("../../assets/main/Bluepaper.png")}
          alt="파랑헌혈증서"
        />
        <Text>
          <MainText>헌혈증서를 소개합니다</MainText>
          <SubText>
            헌혈증서는 헌혈자가 헌혈 후 받는 증서로,
            <br />
            수혈이 필요한 이들에게 생명의 기회를 제공합니다.
          </SubText>
        </Text>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  background-color: #ffff;
  padding-left: 250px;
  text-align: center;
  align-items: center;
`;

const Text = styled.div`
  flex-direction: column;
  width: 600px;
  height: 510px;
  background-color: #ffff;
  justify-content: center;
  align-items: left;
  text-align: left;
  margin: 0px 60px;
`;
const MainText = styled.div`
  color: #111;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--40, 50px); /* 125% */
  letter-spacing: -1px;
  margin: 20px 10px 27px 0px;
`;

const SubText = styled.div`
  color: #767676;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--26, 36px); /* 138.462% */
  letter-spacing: -0.65px;
  margin-left: 5px;
`;

const Image = styled.img`
  margin-top: 30px;
  width: 817px;
  height: 517px;
`;

export default BlueBloodIntro;
