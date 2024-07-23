import React from "react";
import Input from "@/components/common/Input";
import styled from "styled-components";

const InputPhoneNum = () => {
  const Hypen = () => {
    return <Hyp>-</Hyp>;
  };

  return (
    <Wrapper>
      <Input
        type={"number"}
        value={"010"}
        placeholder={"010"}
        maxLength={"3"}
        customStyles={InputStyle}
      />
      <Hypen />
      <Input placeholder={"0000"} customStyles={InputStyle} />
      <Hypen />
      <Input placeholder={"0000"} customStyles={InputStyle} />
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
