import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Notice from "@/components/mypage/Notice";
import Title from "@/components/mypage/Tilte";
import Profile from "@/components/mypage/Profile";
import Incontent from "@/components/mypage/Incontent";
import getMyPage from "@/api/mypage/getMyPage";
import { useNavigate } from "react-router-dom";
import getParticipation from "@/api/mypage/getParticipation";
import getReceivedDonation from "@/api/donation/getReceivedDonation";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [participation, setParticipation] = useState([]);
  const [donators, setDonators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const result = await getMyPage();
        console.log(result.data);
        setUserInfo(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    const fetchEvent = async () => {
      try {
        const result = await getParticipation();
        console.log(result.data);
        setParticipation(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    const fetchDonators = async () => {
      try {
        const result = await getReceivedDonation();
        console.log(result.data);
        setDonators(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetchUserInfo();
    fetchEvent();
    fetchDonators();
  }, [navigate]);

  return (
    <Wrapper>
      <Notice />
      <Container>
        <Title />
        <Box>
          <Profile user={userInfo} />
          <Incontent />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0px 342px;
  margin-bottom: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
