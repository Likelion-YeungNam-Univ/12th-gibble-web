import getEventList from "@/api/event/getEventList";
import Content from "@/components/event/Content";
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
      console.log(eventList);

      try {
        const result = await getEventList({ nowPage, region });

        console.log(result);
        setEventList(result.data.content);
        setTotalPages(result.totalPages);
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
        <Content />
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
  padding: 20px 30px;
`;

export default EventList;
