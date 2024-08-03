import Notice from "@/components/event/eventPage/Notice";
import React from "react";
import styled from "styled-components";
import Title from "@/components/event/eventPage/Title";

const EventPage = () => {
  return (
    <Wrapper>
      <Notice />
      <Container>
        <Title />
      </Container>
    </Wrapper>
  );
};

export default EventPage;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Container = styled.div`
  padding: 0px 342px;
`;
