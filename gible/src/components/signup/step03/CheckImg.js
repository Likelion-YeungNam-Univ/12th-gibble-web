import React from "react";
import styled from "styled-components";
import { ReactComponent as check } from "@/assets/signup/circle-check-solid.svg";

const CheckImg = () => {
  return (
    <Box>
      <Check />
    </Box>
  );
};

export default CheckImg;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 58px;
`;

const Check = styled(check)`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
`;
