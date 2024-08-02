import React from "react";
import styled from "styled-components";
import Notice from "@/components/mypage/Notice";
import Title from "@/components/mypage/Tilte";
import Profile from "@/components/mypage/Profile";
import Incontent from "@/components/mypage/Incontent";


const Mypage = () => {
  return (
    <Wrapper>
      <Notice />
      <Container>
        <Title />
        <Box>
          <Profile />
          <Incontent/>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0px 342px;
  margin-bottom: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;

`;