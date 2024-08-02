import React from "react";
import styled from "styled-components";

const DonationBar = ({ wanted, donated }) => {
  return (
    <Wrapper>
      <Red width={`${(donated / wanted) * 100}%`}></Red>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 20%;
  height: 29px;
  border-radius: 6px;
  align-items: center;
  text-align: end;
  background-color: #d9d9d9;
  font-size: 16px;
  color: #fff;
  position: relative;
`;
const Red = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: var(--main-color);
  border-radius: 6px;
`;

export default DonationBar;
