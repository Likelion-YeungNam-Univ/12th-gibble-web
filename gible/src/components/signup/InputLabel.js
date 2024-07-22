import React from 'react'
import styled from 'styled-components'

const InputLabel = ({ text, isEssential }) => {
  return (
      <Wrapper>{text} { isEssential ? <span style={{color : "var(--main-color)"}}> * </span> : null }</Wrapper>
  )
}

const Wrapper = styled.label`
    width: 146px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`

export default InputLabel