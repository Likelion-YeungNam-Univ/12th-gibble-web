import React from "react";
import styled from "styled-components";
import mainBanner from "@/assets/main/mainbanner.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const MainPic = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <BannerImg>
        <Button
          onClick={() => {
            navigate("/post");
          }}
          $customStyles={{
            padding: "14px 24px",
            borderRadius: "12px",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "var(--32, 44px)" /* 137.5% */,
            letterSpacing: "-0.8px",
            marginLeft: "249px",
            marginBottom: "222px",
          }}
        >
          기부하러 바로가기
        </Button>
      </BannerImg>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BannerImg = styled.div`
  width: 1920px;
  height: 800px;
  background-image: url(${mainBanner});
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: end;
`;

export default MainPic;
