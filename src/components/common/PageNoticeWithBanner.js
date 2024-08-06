import React from "react";
import styled from "styled-components";

const PageNoticeWithBanner = ({ location, banner }) => {
  return (
    <Wrapper banner={banner}>
      {location.map((el, idx) => {
        return idx !== location.length - 1 ? `${el} > ` : el;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background-image : url(${props => props.banner});
    background-size : cover;
    background-position : center;
    display: flex;
    justify-content: end;
    align-items  : end;
    box-sizing : border-box;
    padding : 24px 252px;
    width: 1920px;
    height : 270px;
    color: #FFF;
    margin-bottom : 96px;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`;

export default PageNoticeWithBanner;
