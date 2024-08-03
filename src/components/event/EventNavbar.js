import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EventNavbar = (region, setRegion) => {
  const navigate = useNavigate();
  const clickHandler = (loc) => {
    setRegion(loc.region);
    navigate(`/event?page=0&region=${region}`);
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
      {location.map((loc) => (
        <Category onClick={clickHandler}>{loc.name}</Category>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Category = styled.div`
  font-size: 20px;
  color: #767676;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    font-weight: bold;
  }
`;

export default EventNavbar;
