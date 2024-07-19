import React from "react";
import styled from "styled-components";
import CheckBox from "../CheckBox";

const CheckBoxs = () => {
  return (
    <Box>
      <CheckBoxTextBox>
        <CheckBox type="checkbox" />
        <span>만 14세 이상입니다.&nbsp;</span>
        <span style={{ color: "var(--main-color)" }}>(필수)</span>
      </CheckBoxTextBox>
      <CheckBoxTextBox>
        <CheckBox type="checkbox" />
        <span>개인정보 수집 및 이용에 대한 안내&nbsp;</span>
        <span style={{ color: "var(--main-color)" }}>(필수)</span>
      </CheckBoxTextBox>
    </Box>
  );
};

export default CheckBoxs;

const Box = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CheckBoxTextBox = styled.div`
  display: flex;
  align-items: center;
`;
