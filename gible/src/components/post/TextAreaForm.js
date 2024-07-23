import React from 'react'
import styled from 'styled-components'
import InputLabel from '../common/InputLabel'

const TextAreaForm = ({ text, isEssential, condition, content, setter, maxLength }) => {
    const inputHandler = (e) => {
        if (e.target.value.length <= maxLength) {
            setter(e.target.value)
        }
    }
  return (
      <InputContainer>
            <Label>
                <InputLabel text={text} isEssential={isEssential} />
              {condition && <Condition>{condition}</Condition>}
            </Label>
            <TextArea type="text" placeholder={`${text}를 입력해주세요.`} onChange={(e) => inputHandler(e)} value={content}></TextArea>
      </InputContainer>
  )
}

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items : start;
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