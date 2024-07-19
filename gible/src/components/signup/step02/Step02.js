import React from "react";
import InformationTitle from "./InformationTitle";
import InformationBox from "./InformationBox";

const Step02 = ({ setStep }) => {
  return (
    <>
      <InformationTitle />
      <InformationBox setStep={setStep} />
    </>
  );
};

export default Step02;
