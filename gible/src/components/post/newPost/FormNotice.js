import React from 'react'
import InputContainer from './common/InputContainer'
import Label from './common/Label'
import styled from 'styled-components'

export const ContentNotice = () => {
  return (
    <InputContainer>
        <Label/>
        <FormNotice>
          구체적인 상황을 <span style={{ fontWeight: '600'}}>상세히 설명</span>해주면 좋겠어요.
          <br/>
          <span style={{ fontWeight: '600'}}>개인정보 (전화번호, 주민번호)</span>는 작성하지 말아주세요.
        </FormNotice>
    </InputContainer>
  )
}

export const TitleNotice = () => {
    return (
      <InputContainer>
          <Label/>
          <FormNotice><span style={{ fontWeight: '600'}}>간결하고 명확하게&nbsp;</span> 글의 핵심 내용을 담는 게 좋습니다.</FormNotice>
      </InputContainer>
    )
  }

  const FormNotice = styled.div`
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