import React from 'react'
import InputLabel from '../common/InputLabel';
import styled from 'styled-components';

const InputFormFix = ({ text, content}) => {
  return (
      <InputContainer>
          <Label>
              <InputLabel text={text} />
          </Label>
          <Content>{content}</Content>
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
const Content = styled.div`
  width : 70%;
  padding : 15px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  background-color : #dbdbdb;
  color : var(--gray-color);
`

export default InputFormFix