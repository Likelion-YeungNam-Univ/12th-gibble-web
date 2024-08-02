import React from 'react'
import styled from 'styled-components'
import Information from './Information';
import DonationInfo from './DonationInfo';

const Notice = () => {
  return (
    <Wrapper>
          <Information/>
          <DonationInfo/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex; 
    justify-content : space-between;
`

export default Notice