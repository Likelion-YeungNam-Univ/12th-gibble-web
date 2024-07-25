import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Input from "@/components/common/Input";

const InputPhoneNum = () => {
  const [phoneNum1, setPhoneNum1] = useState("010");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");

  const Hypen = () => {
    return <Hyp>-</Hyp>;
  };

  return (
    <Wrapper>
      <Input
        type={"number"}
        placeholder={"010"}
        customStyles={InputStyle}
        maxLength={"3"}
        setter={setPhoneNum1}
        content={phoneNum1}
      />
      <Hypen />
      <Input
        type={"number"}
        placeholder={"0000"}
        customStyles={InputStyle}
        maxLength={"4"}
        setter={setPhoneNum2}
        content={phoneNum2}
      />
      <Hypen />
      <Input
        type={"number"}
        placeholder={"0000"}
        customStyles={InputStyle}
        maxLength={"4"}
        setter={setPhoneNum3}
        content={phoneNum3}
      />
    </Wrapper>
  );
};

export default InputPhoneNum;

const Hyp = styled.div`
  margin: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  height: 54px;
  justify-content: space-between;
`;

const InputStyle = `
  width: 89px;
  text-align:center;
    
`;
