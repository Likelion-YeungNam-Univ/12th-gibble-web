import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SignUpTitle from "@/components/signup/SignUpTitle";
import StepBox from "@/components/signup/StepBox";
import Step01 from "@/components/signup/step01/Step01";
import Step02 from "@/components/signup/step02/Step02";
import Step03 from "@/components/signup/step03/Step03";

const SignUp = () => {
  const [step, setStep] = useState(1);

  return (
    <Box>
      <Center>
        <SignUpTitle />
        <StepBox number={step} />
        {step === 1 ? (
          <Step01 setStep={setStep} />
        ) : step === 2 ? (
          <Step02 setStep={setStep} />
        ) : (
          <Step03 />
        )}
      </Center>
    </Box>
  );
};

export default SignUp;

const Box = styled.div`
  padding: 5% 15%;
  display: flex;
  justify-content: center;
`;

const Center = styled.div``;
