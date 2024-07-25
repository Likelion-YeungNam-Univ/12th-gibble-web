import React from 'react'
import styled from 'styled-components'

const InputFormNotice = () => {
  return (
    <InputContainer>
        <Label>
        </Label>
        <InputNotice><span style={{ fontWeight: '600'}}>간결하고 명확하게&nbsp;</span> 글의 핵심 내용을 담는 게 좋습니다.</InputNotice>
    </InputContainer>
  )
}

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items : center;
    min-height : 50px;
    margin-bottom : 10px;
`

const Label = styled.div`
    width : 20%;
    height : 100%;
    display : flex;
    align-items: center;
`

const InputNotice = styled.div`
  width : 70%;
  height: 100%;
  border-radius: 6px;
  border : 1px solid #FEF3F4;
  padding : 15px;
  font-size: 18px;
  font-weight: 400;
  color : var(--gray-color);
  letter-spacing: -0.45px;
  background-color: #FEF3F4;
  display : flex;
  align-items : center;
`

export default InputFormNotice