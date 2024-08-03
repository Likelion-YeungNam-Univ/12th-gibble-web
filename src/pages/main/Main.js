import BlueBloodIntro from "@/components/main/BlueBloodIntro";
import YellowBloodIntro from "@/components/main/YellowBloodIntro";
import MainPic from "@/components/main/MainPic";
import Review from "@/components/main/Review";
import Nodeal from "@/components/main/Nodeal";
import Donation from "@/components/main/Donation";
import Community from "@/components/main/Community";
import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <MainPic />
        <BlueBloodIntro />
        <YellowBloodIntro />
        <Review />
        <Nodeal />
        <Donation />
        <Community />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1920px;
`;

export default Main;
