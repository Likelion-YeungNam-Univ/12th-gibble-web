import React from "react";
import Description from "./Description";
import InformationBox from "./InformationForm";

const Step02 = ({ setStepNum }) => {
  return (
    <>
      <Description />
      <InformationBox setStepNum={setStepNum} />
    </>
  );
};

export default Step02;
