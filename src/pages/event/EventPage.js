import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Content from "@/components/event/eventPage/Content";
import { useNavigate, useParams } from "react-router-dom";
import getEvent from "@/api/event/getEvent";
import Loading from "@/layouts/Loading";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import eventBanner from "@/assets/image/event-banner.png";

const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getEvent(eventId);
        setEvent(result.data);
      } catch (error) {
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };
    if (eventId) {
      fetch();
    }
  }, [navigate, eventId]);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <PageNoticeWithBanner
        location={["Home", "이벤트", "상세 페이지"]}
        banner={eventBanner}
      />
      <Container>
        <Content event={event} />
      </Container>
    </Wrapper>
  );
};

export default EventPage;

const Wrapper = styled.div``;

const Container = styled.div`
  margin-bottom: 150px;
  width: 1238px;
  margin: 0 auto;
`;
