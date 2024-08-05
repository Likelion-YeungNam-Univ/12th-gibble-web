import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/event/${event.eventId}`);
  };
  return (
    <Wrapper onClick={clickHandler}>
      <ThumbNail src={event.imageUrl} />
      <Description>
        <Title>{event.title}</Title>
        <Duration>{event.duration}</Duration>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 28.9%;
  height: 279px;
  border-radius: 10px;
  margin-bottom: 5px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  overflow: hidden;
`;
const ThumbNail = styled.img`
  width: 402px;
  height: 209px;
  object-fit: cover;
  object-position: top;
`;

const Description = styled.div`
  padding: 9px 15px;
`;

const Title = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const Duration = styled.div`
  color: #797979;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

export default EventCard;
