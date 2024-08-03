import React from "react";
import styled from "styled-components";

const StepBoxCategory = ({ step, on }) => {
  console.log("on", on);
  return (
    <Wrapper on={on.toString()}>
      <StepNum>STEP {step.num}</StepNum>
      <StepText>{step.text}</StepText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
  color: ${(props) => (props.on === "true" ? "#F42E3D" : "inherit")};
`;

const StepNum = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.6px;
`;

const StepText = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.6px;
`;

export default StepBoxCategory;
