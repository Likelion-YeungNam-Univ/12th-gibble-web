import React from "react";
import styled from "styled-components";
import { ReactComponent as chevron } from "@/assets/svg/chevron-right.svg";
import StepBoxCategory from "./StepBoxCategory";

const StepBox = ({ number }) => {
  const step = [{ num: '01', text: '약관동의' }, { num: '02', text: '기본정보입력' }, { num: '03', text: '가입완료' }];
  return (
    <Wrapper>
      <StepBoxCategory step={step[0]} on={(number === 1)} />
      <Chevron />
      <StepBoxCategory step={step[1]} on={(number === 2)}/>
      <Chevron />
      <StepBoxCategory step={step[2]} on={(number === 3)}/>
    </Wrapper>
  );
};

export default StepBox;

const Wrapper = styled.div`
  color: #767676;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  background: #fef3f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing : border-box;
  padding : 25px 10%;
  margin-bottom : 40px;
`;

const StepTextBox = styled.div`
    display: flex;
  width: 388px;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;

const StepText = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
`;

const StepDescription = styled.div`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
`;

const Chevron = styled(chevron)`
  width: var(--26, 36px);
  height: var(--26, 36px);
  flex-shrink: 0;
`;
