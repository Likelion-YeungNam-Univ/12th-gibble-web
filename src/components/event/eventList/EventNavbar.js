import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EventNavbar = ({ region, setRegion }) => {
  const navigate = useNavigate();
  const clickHandler = (loc) => {
    setRegion(loc.region);
    navigate(`/event?page=0&region=${loc.region}`);
    window.location.reload();
  };

  const location = [
    { name: "전국", region: "" },
    { name: "서울", region: "SEOUL" },
    { name: "경기", region: "GYEONGGI" },
    { name: "인천", region: "INCHEON" },
    { name: "강원", region: "GANGWON" },
    { name: "충북", region: "CHUNGBUK" },
    { name: "충남", region: "CHUNGNAM" },
    { name: "대구/경북", region: "DAEGU_GYEONGBUK" },
    { name: "경남", region: "GYEONGNAM" },
    { name: "울산", region: "ULSAN" },
    { name: "부산", region: "BUSAN" },
    { name: "전북", region: "JEONBUK" },
    { name: "광주/전남", region: "GWANGJU_JEONNAM" },
    { name: "제주", region: "JEJU" },
  ];
  return (
    <Wrapper>
      {location.map((loc, index) => (
        <Category
          key={index}
          style={loc.region === region ? { color: "red" } : null}
          onClick={() => clickHandler(loc)}
        >
          {loc.name}
        </Category>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
  margin-bottom: 30px;
`;

const Category = styled.div`
  cursor: pointer;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;

  &:hover {
    font-size: 22px;
    color: var(--main-color);
    font-weight: bold;
    border-bottom: 2px solid var(--main-color);
  }
`;

export default EventNavbar;
