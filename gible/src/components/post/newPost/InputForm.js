import React from 'react'
import InputLabel from '../../common/InputLabel';
import styled from 'styled-components';
import Input from '../InputForPost';

const InputForm = ({ text, isEssential, condition, content, setter, maxLength}) => {
  return (
      <InputContainer>
          <Label>
              <InputLabel text={text} isEssential={isEssential} condition={condition}></InputLabel>
              {condition && <Condition>{condition}</Condition>}
          </Label>
          <Input
              type={'text'}
              placeholder={`${text}를 입력하세요.`}
              customStyles={InputStyle}
              content={content}
              setter={setter}
              maxLength={maxLength}
          />
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

const Condition = styled.div`
    font-size : 18px;
    color : #767676;
    box-sizing : border-box;
    width : 120px;
`

const InputStyle = `
    width : 70%;
    padding : 15px;
`

export default InputForm