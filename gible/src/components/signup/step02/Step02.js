import React from "react";
import styled from "styled-components";
import Description from "./Description";
import InformationBox from "./InformationForm";
import Button from "@/components/common/Button";

const Step02 = ({ setStepNum }) => {
  return (
    <Wrapper>
      <Description />
      <InformationBox setStepNum={setStepNum} />
      <Button
        text={"회원가입"}
        onClick={() => setStepNum((prev) => prev + 1)}
        customStyles={buttonStyle}
      ></Button>
    </Wrapper>
  );
};

export default Step02;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const buttonStyle = `
  width : 85%;
  background: #f4f4f4;
  color: var(--gray-color);
  transition: 0.2s;

  &:hover {
    background: var(--main-color);
    color: #fff;
  }
`;
