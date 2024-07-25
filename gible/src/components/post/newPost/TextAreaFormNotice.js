import React from 'react'
import styled from 'styled-components'

const TextAreaFormNotice = () => {
  return (
    <InputContainer>
        <Label>
        </Label>
        <InputNotice>
          구체적인 상황을 <span style={{ fontWeight: '600'}}>상세히 설명</span>해주면 좋겠어요.
          <br/>
          <span style={{ fontWeight: '600'}}>개인정보 (전화번호, 주민번호)</span>는 작성하지 말아주세요.
        </InputNotice>
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
  border: 1px solid #FEF3F4;
  padding : 15px;
  font-size: 18px;
  font-weight: 400;
  color : var(--gray-color);
  letter-spacing: -0.45px;
  background-color: #FEF3F4;
  align-items : center;
`

export default TextAreaFormNotice