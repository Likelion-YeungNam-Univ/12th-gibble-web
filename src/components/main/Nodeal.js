import React from "react";
import styled from "styled-components";

const Nodeal = () => {
  return (
    <Wrapper>
      <Image src={require("../../assets/main/nodeal.jpg")} alt="nodeal" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 723px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 1920px;
  height: 723px;
`;

export default Nodeal;
