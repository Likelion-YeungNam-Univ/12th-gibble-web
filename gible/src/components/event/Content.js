import React from 'react'
import styled from 'styled-components';
import EventCard from './EventCard';

const Content = () => {
    const result = [1,2,3,4,5,6,7,8];
    const num = result.length;
  return (
      <Wrapper>
          <ResultText>전체 <NumText>{num}</NumText>건</ResultText>
          <Container>
              {result.map(event => <EventCard></EventCard>)}
          </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 20px;
    margin-bottom : 30px;
`;

const ResultText = styled.div`
    font-size : 18px;
`

const NumText = styled.span`
    color: #F42E3D;
    font-size : 18px;
    font-weight: bold;
`;

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : start;
    gap : 2%;
    flex-wrap : wrap;
    box-sizing : border-box;
    padding : 0 auto;
`


export default Content