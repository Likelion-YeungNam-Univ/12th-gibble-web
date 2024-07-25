import React from 'react'
import styled from 'styled-components'

const Notice = () => {
  return (
    <Wrapper>Home &gt; 이벤트 &gt; 진행 중 이벤트</Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : end;
    color : #767676;
    font-size : 18px;
    margin-bottom : 100px;
`

export default Notice