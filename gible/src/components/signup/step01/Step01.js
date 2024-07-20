import React from "react";
import Notice from "./Notice";
import Agreement from "./Agreement";
import ButtonComponent from "../ButtonComponent";

const Step01 = ({ setStepNum }) => {
  const agreement = ["만 14세 이상입니다.", "개인정보 수집 및 이용에 대한 안내"];
  return (
    <>
      {agreement.map((el,idx) => <Agreement key={idx} text={el} />)}
      <Notice />
      <ButtonComponent text={'다음'} onClick={()=>setStepNum(prev => prev+1)} customStyles={buttonStyle} />
    </>
  );
};

const buttonStyle = `
  background-color: var(--main-color);
  align-self: end;
`

export default Step01;
