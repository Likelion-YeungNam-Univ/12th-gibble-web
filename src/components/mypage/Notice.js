import React from "react";
import styled from "styled-components";
import bannerImg from "@/assets/svg/mypagebanner.png";

const Notice = () => {
  return (
    <Wrapper>
      <BannerImg>
        <NoticeText>
          Home &gt; 마이페이지
        </NoticeText>
      </BannerImg>
    </Wrapper>
  );
};

export default Notice;

const Wrapper = styled.div``;

const BannerImg = styled.div`
  width: 100%;
  height: 270px;
  background-image: url(${bannerImg});
  background-size: cover;
  display: flex;
  justify-content: right;
  align-items: last baseline;
`;

const NoticeText = styled.div`
  margin: 24px 252px;
  color: #fff;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;