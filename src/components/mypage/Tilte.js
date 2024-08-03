import React from "react";
import styled from "styled-components";

const Title = () => {
  return <Wrapper>마이페이지</Wrapper>;
};

export default Title;

const Wrapper = styled.div`
    margin-top: 72px;
    height: 70px;
    color: #111;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--24, 34px); /* 130.769% */
    letter-spacing: -0.65px;
    display: flex;
    justify-content: left;
    //border-style, border-width, border-color
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #F42E3D;

`;