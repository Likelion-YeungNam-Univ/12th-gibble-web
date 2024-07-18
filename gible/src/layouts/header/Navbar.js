import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
      <Wrapper>
          <Category>커뮤니티</Category>
          <Category>이벤트</Category>
          <Category>사업 소개</Category>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 20px 300px;
    border-top : 1px solid #dbdbdb;
    border-bottom : 1px solid #dbdbdb;

    display : flex;
    justify-content : space-between;
    align-items : center
`

const Category = styled.div`
    font-size : 20px;
    color : #111;
    font-weight: bold;
`

export default Navbar