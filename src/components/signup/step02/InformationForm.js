import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MarketingBox from "./CheckMail";
import Input from "@/components/common/Input";
import InputLabel from "../InputLabel";
import Button from "@/components/common/Button";
import InputPhoneNum from "./InputPhoneNum";

const InformationForm = ({ setStepNum }) => {
  const testMail = "ex) ab123@naver.com";

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <Wrapper>
      <InfoWrapper>
        <Info>
          <InputLabel text={"이메일"} isEssential={true} />
          <Mail>{testMail}</Mail>
        </Info>
        <Info>
          <InputLabel text={"성명"} isEssential={true} />
          <Input
            type={"text"}
            placeholder={"이름을 입력해주세요."}
            content={name}
            setter={setName}
          />
        </Info>
        <Info>
          <InputLabel text={"닉네임"} isEssential={true} />
          <Input
            type={"text"}
            placeholder={"닉네임을 확인해주세요."}
            content={nickname}
            setter={setNickname}
          />
          <Button text={"중복확인"} />
        </Info>
        <Info>
          <InputLabel text={"휴대폰 번호"} isEssential={true} />
          <InputPhoneNum />
        </Info>
      </InfoWrapper>
      <StyleHr2 />
      <MarketingBox />
    </Wrapper>
  );
};

export default InformationForm;

const Wrapper = styled.div`
  padding: 0px 19%;
`;

const InfoWrapper = styled.div`
  margin: 60px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding-bottom: 24px;
  align-items: center;
  gap: 16px;
`;

const Mail = styled.div`
  width: 420px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
`;

const StyleHr2 = styled.hr`
  border: none;
  height: 1px;
  background: #dbdbdb;
`;