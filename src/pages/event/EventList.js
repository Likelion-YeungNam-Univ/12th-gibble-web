import getEventList from "@/api/event/getEventList";
import PageNotice from "@/components/common/PageNotice";
import EventCard from "@/components/event/eventList/EventCard";
import EventNavbar from "@/components/event/eventList/EventNavbar";
import PageController from "@/components/event/eventList/PageController";
import Separator from "@/components/event/eventList/Separator";
import Loading from "@/layouts/Loading";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import searchEvent from "@/api/event/searchEvent";

const EventList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [eventList, setEventList] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState("");
  const [key, setKey] = useState();
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setNowPage(parseInt(searchParams.get("page")) || 0);
      setRegion(searchParams.get("region"));
      try {
        console.log("바뀐 지역", region);
        const result = await getEventList( nowPage, searchParams.get("region"));
        console.log("result", result.data.content);

        setEventList(result.data.content);
        setTotalPages(result.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    if (!isSearched) {
      fetch();
    }
  }, [nowPage, region, navigate, searchParams]);

  useEffect(() => {
    const fetch = async () => {
      setIsSearched(true);
      if (isSearched) {
        console.log("바뀐 지역", region);
        const result = await searchEvent(
          parseInt(searchParams.get("page")),
          region,
          key
        );
        setNowPage(parseInt(searchParams.get("page")) || 0);
        setIsSearched(true);
        setEventList(result.data.content);
        setTotalPages(result.data.totalPages);
        navigate(`/event?page=${nowPage}&region=${region}&search=${key}`);
      }
    };
    fetch();
  }, [key, nowPage, navigate]);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <PageNotice location={["Home", "이벤트"]} />
      <Container>
        <Separator title={"이벤트"} setKey={setKey} />
        <EventNavbar region={region} setRegion={setRegion} />
        {totalPages === 0 && <Error>진행 중인 이벤트가 없습니다.</Error>}
        <Content>
          {eventList.map((el, index) => {
            return <EventCard event={el} key={index} />;
          })}
        </Content>
        <PageController
          nowPage={nowPage}
          setNowPage={setNowPage}
          totalPages={totalPages}
          region={region}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 30px 200px;
  padding-top: 0px;
  margin-bottom: 50px;

`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 20px 70px 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: auto;
  padding-bottom: 80px;
  margin-left: 140px
`;

const Error = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  margin-top: 100px;
`;

export default EventList;
