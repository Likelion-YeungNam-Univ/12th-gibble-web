import React from "react";
import styled from "styled-components";
import Description from "./Description";
import InformationForm from "./InformationForm";

const Step02 = ({ setStepNum }) => {
  return (
    <Wrapper>
      <Description />
      <InformationForm setStepNum={setStepNum} />
    </Wrapper>
  );
};

export default Step02;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
