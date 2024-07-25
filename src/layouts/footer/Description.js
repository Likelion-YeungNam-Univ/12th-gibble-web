import React from 'react'
import styled from 'styled-components'

const Description = () => {
  return (
      <Wrapper>
          <Left>
              <LeftTop>
                  <Text>개인정보처리방침</Text>
                  <Text>이용약관</Text>
                  <Text>이메일 무단 수집거부</Text>
                  <Text>찾아오시는 길</Text>
              </LeftTop>
              <Text>주소</Text>
              <Text>대표자</Text>
              <Copyright>CopyRight (c) 2024 gible</Copyright>
          </Left>
          <Right></Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
`

const Left = styled.div`
    display : flex;
    flex-direction : column;
    gap : 10px;
`;

const LeftTop = styled.div`
    display : flex;
    gap : 20px;
    margin-bottom : 20px;
`

const Right = styled.div`
    display : flex;
    flex-direction : column;
`;

const Text = styled.div`
    font-size : 16px;
    color : #767676;
`;

const Copyright = styled.div`
    font-size : 16px;
    color : #767676;
    margin-top : 25px;

`;

export default Description