import React from 'react'
import styled from 'styled-components'
import CheckBox from '@/components/common/CheckBox'

const Agreement = React.forwardRef(({text, id, ...rest},ref) => {
  return (
    <Wrapper>
      <CheckBox
        id={id}
        type='checkbox'
        ref={ref}
        {...rest}
      ></CheckBox>
      <Description htmlFor={id}>{text} <span style={{ color: "var(--main-color)" }}>(필수)</span></Description>
    </Wrapper>
  )
})

const Wrapper = styled.div`
    display : flex;
    justify-content : start;
    align-items : center;
`

const Description = styled.label`
    color : #111;
    font-weight : 400;
    font-size: 22px;
`

export default Agreement