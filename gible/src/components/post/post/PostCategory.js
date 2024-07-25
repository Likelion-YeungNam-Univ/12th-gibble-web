import React from 'react'
import styled from 'styled-components'

const PostCategory = () => {
  return (
      <Wrapper>
          <Category width={`5%`}>번호</Category>
          <Category width={`55%`}>제목</Category>
          <Category width={`10%`}>글쓴이</Category>
          <Category width={`15%`}>등록일</Category>
          <Category width={`15%`}>기부현황</Category>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    font-size : 22px;
    font-weight : bold;
    margin-bottom : 15px;
`

const Category = styled.div`
    width : ${(props) => props.width};
    text-align : center;
`



export default PostCategory