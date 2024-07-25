import React from 'react'
import styled from 'styled-components'
import InputLabel from '../../common/InputLabel'
import InputContainer from './common/InputContainer'
import Label from './common/Label'

const TextAreaForm = ({ text, isEssential, condition, content, setter, maxLength }) => {
    const inputHandler = (e) => {
        if (e.target.value.length <= maxLength) {
            setter(e.target.value)
        }
    }
  return (
      <InputContainer alignItems={'start'}>
            <Label>
                <InputLabel text={text} isEssential={isEssential} />
              {condition && <Condition>{condition}</Condition>}
            </Label>
            <TextArea type="text" placeholder={`${text}를 입력해주세요.`} onChange={(e) => inputHandler(e)} value={content}></TextArea>
      </InputContainer>
  )
};

const Condition = styled.div`
    font-size : 18px;
    color : #767676;
    box-sizing : border-box;
    width : 120px;
`

const TextArea = styled.textarea`
    width: 70%;
    height: 300px;
    border-radius: 6px;
    border: 1px solid #dbdbdb;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
    padding: 15px;
    font-family: pretendard;
    resize: none;
    &::placeholder {
        color: #dbdbdb;
    }
`

export default TextAreaForm