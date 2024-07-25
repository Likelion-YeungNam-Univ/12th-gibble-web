import React from 'react'
import styled from 'styled-components'

const InputContainer = ({alignItems, children}) => {
  return (
    <Wrapper alignItems={alignItems}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items : ${props => props.alignItems ? props.alignItems : 'center'};
    min-height : 50px;
    margin-bottom : 10px;
`;

export default InputContainer