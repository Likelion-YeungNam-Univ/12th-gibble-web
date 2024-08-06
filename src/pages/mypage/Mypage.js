import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "@/components/mypage/Tilte";
import Profile from "@/components/mypage/Profile";
import Incontent from "@/components/mypage/Incontent";
import getMyPage from "@/api/mypage/getMyPage";
import { useNavigate } from "react-router-dom";
import getParticipation from "@/api/mypage/getParticipation";
import getReceivedDonation from "@/api/donation/getReceivedDonation";
import getMyDonation from "@/api/donation/getMyDonation";
import getMyPosts from "@/api/mypage/getMyPosts";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import myPageBanner from "@/assets/image/mypagebanner.png"

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [participation, setParticipation] = useState([]);
  const [donators, setDonators] = useState([]);
  const [myDonation, setMyDonation] = useState([]);
  const [myPost, setMyPost] = useState([]);
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
        console.log("참여이벤트", result.data);
        setParticipation(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    const fetchDonators = async () => {
      try {
        const result = await getReceivedDonation();
        console.log("기부자 명단 result", result.data);
        setDonators(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    const fetchMyDonation = async () => {
      try {
        const result = await getMyDonation();
        console.log(result.data);
        setMyDonation(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    const fetchMyPost = async () => {
      try {
        const result = await getMyPosts();
        console.log("내 게시글", result.data);
        setMyPost(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetchUserInfo();
    fetchEvent();
    fetchDonators();
    fetchMyDonation();
    fetchMyPost();
  }, [navigate]);

  return (
    <Wrapper>
      <PageNoticeWithBanner location={['Home','마이페이지']} banner={myPageBanner}/>
      <Container>
        <Title />
        <Box>
          <Profile user={userInfo} />
          <Incontent
            events={participation}
            myDonation={myDonation}
            myPost={myPost}
            donators={donators}
          />
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
