import React from 'react'
import styled from 'styled-components'

const DonationBar = ({ donation }) => {
    console.log('donation', donation)
    console.log(donation.recieved / donation.required * 100)
  return (
      <Wrapper>
          <Red width={`${donation.recieved / donation.required * 100}%`}></Red>
          <Text>{donation.recieved} / {donation.required}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    width : 100%;
    height : 130%;
    border-radius : 6px;
    align-items : center;
    text-align : end;
    background-color : #D9D9D9;
    font-size : 16px;
    color : #fff;
    position : relative;
`
const Red = styled.div`
    width : ${(props) => props.width};
    height : 100%;
    background-color : var(--main-color);
    border-radius : 6px;
`

const Text = styled.p`
    position : absolute;
    right : 5px;
`



export default DonationBar