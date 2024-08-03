import React from "react";
import styled from "styled-components";

const YellowBloodIntro = () => {
  const handleReissueClick = () => {
    window.location.href =
      "https://bloodinfo.net/knrcbs/cm/cntnts/cntntsView.do?mi=1143&cntntsId=1023";
  };

  return (
    <Wrapper>
      <Box>
        <Image
          src={require("../../assets/main/Yellowpaper.png")}
          alt="노랑헌혈증서"
        />
        <Text>
          <MainText>헌혈증서, 재발급이 가능해졌어요</MainText>
          <SubText>
            혈액관리법 개정에 따라 22.09.24 이후
            <br />
            최초 발급된 헌혈증서 (노란색)부터 잃어버리거나 훼손되어
            <br />
            못쓰게 된것이 확인된 경우 재발급이 가능합니다.
          </SubText>
          <Button onClick={handleReissueClick}>재발급 신청하러가기</Button>
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
  margin-bottom: 200px;
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
  margin: 10px 10px 27px 0px;
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
  width: 817px;
  height: 517px;
`;

const Button = styled.button`
  background-color: #ffff;
  color: #111;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
  font-size: 20px;
  padding: 14px 24px;
  margin-top: 20px;
  border-radius: 6px;
  border: 1px solid #666;
  margin-top: 70px;
  margin-left: 10px;
  font-family: pretendard;

  cursor: pointer;

  &:hover {
    color: #f42e3d;
    border-color: #f42e3d;
  }
`;

export default YellowBloodIntro;
