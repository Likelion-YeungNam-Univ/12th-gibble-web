import React from 'react'
import styled from 'styled-components'

const Label = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 30%;
    height : 100%;
    display : flex;
    align-items : center;
`

export default Label