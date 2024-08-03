import React, { useState } from "react";
import styled from "styled-components";
import profileImage from '../../assets/image/profile.png'; // 이미지 파일을 불러옴

const events = [
    {
      title: "라식글자수가많아지면밑으로내려갑니다이벤트",
      image: profileImage, 
      alt: "라식 이벤트",
      link: "https://www.youtube.com/" // 이벤트 링크
    },
    {
      title: "영화이벤트",
      image: profileImage,
      alt: "영화이벤트",
      link: "https://example.com/2"
    },
    {
      title: "무슨이벤트",
      image: profileImage,
      alt: "무슨이벤트",
      link: "https://example.com/3"
    },
    {
      title: "과자이벤트",
      image: profileImage,
      alt: "과자이벤트",
      link: "https://example.com/4"
    },
    {
      title: "이월드이벤트",
      image: profileImage,
      alt: "이월드이벤트",
      link: "https://example.com/5"
    },
    {
      title: "asdf",
      image: profileImage,
      alt: "프로필 사진 6",
      link: "https://example.com/6"
    },
    {
      title: "asdf",
      image: profileImage,
      alt: "프로필 사진 7",
      link: "https://example.com/7"
    },
    {
      title: "asdf",
      image: profileImage,
      alt: "프로필 사진 8",
      link: "https://example.com/8"
    }
  ];

const EventViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 4 : prevIndex - 4));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= events.length - 4 ? 0 : prevIndex + 4));
  };

  return (
    <Wrapper>
      <List>참여 이벤트 조회</List>
      <Slider>
        <Arrow onClick={handlePrevClick}>&lt;</Arrow>
        <EventContainer>
          {events.slice(currentIndex, currentIndex + 4).map((event, index) => (
            <Event key={index}>
              <EventLink href={event.link} target="_blank" rel="noopener noreferrer">
                <EventImage src={event.image} alt={event.alt} />
                <Eventtitle>{event.title}</Eventtitle>
              </EventLink>
            </Event>
          ))}
        </EventContainer>
        <Arrow onClick={handleNextClick}>&gt;</Arrow>
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
  margin-bottom: 20px;
`;
const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 845px;
  height: 250px;
`;

const Arrow = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  user-select: none;
`;

const EventContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
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

const Eventtitle = styled.p`
    color: #767676;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: -0.45px;
`;

const EventLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default EventViewer;
