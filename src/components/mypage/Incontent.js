//콘텐츠에 들어가는 컴포넌트 => 포르필 ,활동 내역, 기부받은 내역,헌혈증 배송조회
import React from "react";
import styled from "styled-components";
import Actibity from "./Activity";
import Donation from "./Donation";
import Delivery from "./Delivery";
import Event from "./Event";

const Incontent = ({ events, myDonation, myPost, donators }) => {
  return (
    <Wrapper>
      <Box>
        <Actibity myDonation={myDonation} myPost={myPost} />
        <Donation donators={donators} />
        <Delivery myDonation={myDonation} />
        <Event events={events} />
      </Box>
    </Wrapper>
  );
};

export default Incontent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div``;
