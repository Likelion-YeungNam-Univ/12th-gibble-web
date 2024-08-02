import React from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";

const Content = ({ content, wanted, address }) => {
  return (
    <Wrapper>
      <Container>
        <Description>{content}</Description>
        <Button
          $customStyles={{
            padding: "14px 24px",
            borderRadius: "6px;",
            border: "1px solid var(--main-color)",
            background: "white",
            color: "var(--main-color)",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "26px" /* 144.444% */,
            letterSpacing: "0.45px",
            marginRight: "17px",
          }}
        >
          필요 헌혈증 개수 : {wanted}
        </Button>
        <Button
          $customStyles={{
            padding: "14px 24px",
            borderRadius: "6px;",
            border: "1px solid var(--main-color)",
            background: "white",
            color: "var(--main-color)",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "26px" /* 144.444% */,
            letterSpacing: "0.45px",
            marginRight: "17px",
          }}
        >
          수령 주소 : {address}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  border-bottom: 2px solid #dbdbdb;
`;

const Container = styled.div`
  margin-top: 110px;
  margin-bottom: 80px;
  padding: 0px 100px 0px 50px;
`;

const Description = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 145.455% */
  letter-spacing: -0.55px;
  margin-bottom: 25px;
`;
