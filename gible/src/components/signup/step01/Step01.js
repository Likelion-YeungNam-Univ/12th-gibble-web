import React from "react";
import CheckBoxs from "./CheckBoxs";
import Agreement from "./Agreement";
import NextBtn from "./NextBtn";

const Step01 = ({ setStep }) => {
  return (
    <>
      <CheckBoxs />
      <Agreement />
      <NextBtn setStep={setStep} />
    </>
  );
};

export default Step01;
