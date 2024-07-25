import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
      <Wrapper>
          <Title>ERROR 404</Title>
          <Description>페이지를 찾을 수 없습니다.</Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 30px;
    color : var(--main-color);
`;

const Title = styled.div`
    font-size : 50px;
    font-weight : 1000;
`

const Description = styled.div`
    font-size : 35px;
    font-weight : bold;
    color : #111;
`

export default Error