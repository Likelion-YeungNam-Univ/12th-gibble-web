import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Left } from "@/assets/svg/mypageleft.svg";
import { ReactComponent as Right } from "@/assets/svg/mypageright.svg";

const EventViewer = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 4 : prevIndex - 4
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= events.length - 4 ? 0 : prevIndex + 4
    );
  };

  return (
    <Wrapper>
      <List>참여 이벤트 조회</List>
      <Slider>
        <LeftBtn onClick={handlePrevClick}>&lt;</LeftBtn>

        <EventContainer>
          {events.slice(currentIndex, currentIndex + 4).map((event, index) => (
            <Event key={index}>
              <EventLink
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EventImage src={event.event.imageUrl} />
              </EventLink>
            </Event>
          ))}
        </EventContainer>
        <RightBtn onClick={handleNextClick}>&gt;</RightBtn>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
`;

const List = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 115.385% */
  letter-spacing: -0.65px;
`;
const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 845px;
  height: 300px;
  margin-top: 15px;
`;

const LeftBtn = styled(Left)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;

`;

const RightBtn = styled(Right)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;

`;

const EventContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  gap: 20px;
  justify-content: center;
`;

const Event = styled.div`
  flex: 0 0 23%; /* 4개를 나란히 배치하기 위해 23%로 설정 */
  max-width: 23%;
  text-align: center;
`;

const EventImage = styled.img`
  width: 175px;
  height: 230px;
`;

const EventLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default EventViewer;
