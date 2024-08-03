import Notice from "@/components/event/eventPage/Notice";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Content from "@/components/event/eventPage/Content";
import { useNavigate, useParams } from "react-router-dom";
import getEventId from "@/api/event/getEventId";
import Loading from "@/layouts/Loading";

const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getEventId(eventId);
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
      <Notice />
      <Container>
        <Content event={event} />
      </Container>
    </Wrapper>
  );
};

export default EventPage;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Container = styled.div`
  padding: 0px 342px;
`;
