import React from 'react'
import styled from 'styled-components'
import SearchBox from './SearchBox';

const HeadComponent = () => {
  return (
      <Wrapper>
          <Container>
              <HeadLogo />
              <Util>
                  <Text>로그인</Text>
                  <SearchBox></SearchBox>
              </Util>
          </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 20px 250px;
`;

const Container = styled.div`
    display : flex;
    justify-content : space-between;
`

const HeadLogo = styled.div`
    background-color : #f1f1f1;
    width : 188px;
    height : 36px;
`

const Util = styled.div`
    box-sizing : border-box;
    padding : 0 10px;
    display : flex;
    gap : 30px;
    align-items : center;
`;

const Text = styled.div`
    color : #767676;
    font-size : 16px;

`;


export default HeadComponent