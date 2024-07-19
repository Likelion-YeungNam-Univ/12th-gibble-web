import React from "react";
import styled from "styled-components";

const CheckBox = () => {
  return <Box type="checkbox"></Box>;
};

const Box = styled.input`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: var(--24, 34px);
  letter-spacing: -0.6px;
  margin: 10px;
  accent-color: var(--main-color);
  border-radius: 5px;
`;

export default CheckBox;
