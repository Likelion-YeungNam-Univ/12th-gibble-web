import React from 'react'
import styled from 'styled-components'

const Notice = () => {
  return (
      <Wrapper>
          <PhoneNumber>0000-0000</PhoneNumber>
          <Text>기부문의 (월~금 09:00~18:00)</Text>
          <Text>점심시간 (12:30~14:00)</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
    gap : 10px;
    align-items : end;
`

const PhoneNumber = styled.div`
    font-size : 35px;
`
const Text = styled.div`
    font-size : 16px;
    color : #767676;
`

export default Notice