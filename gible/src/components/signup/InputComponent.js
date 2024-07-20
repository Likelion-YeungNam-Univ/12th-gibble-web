import React from 'react'
import styled from 'styled-components'

const InputComponent = ({type, placeholder}) => {
  return (
      <Input type={type}  placeholder={placeholder}></Input>
  )
}

const Input = styled.input`
  width: 420px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  font-family: pretendard;
  &::placeholder {
    color: #dbdbdb;
  }
`

export default InputComponent