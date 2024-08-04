import getEventList from "@/api/event/getEventList";
import EventCard from "@/components/event/EventCard";
import EventNavbar from "@/components/event/EventNavbar";
import Notice from "@/components/event/Notice";
import PageController from "@/components/event/PageController";
import Separator from "@/components/event/Separator";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const EventList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [eventList, setEventList] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setNowPage(parseInt(searchParams.get("page")) || 0);
      setRegion(searchParams.get("region") || "");
      try {
        const result = await getEventList({ nowPage, region });
        console.log("result", result.data.content);

        setEventList(result.data.content);
        setTotalPages(result.totalPages);
        console.log(eventList);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetch();
  }, [nowPage, region, navigate, searchParams]);

  return (
    <Wrapper>
      <Notice />
      <Container>
        <Separator />
        <EventNavbar region={region} setRegion={setRegion} />
        {totalPages === 0 && <Error>진행 중인 이벤트가 없습니다.</Error>}
        <Content>
          {eventList.map((el) => {
            return <EventCard event={el} />;
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
  margin-bottom: 50px;
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 20px 70px 20px 60px;
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
