import React from 'react'
import styled from 'styled-components'

const DonationInfo = () => {
  return (
    <Wrapper>
        <Account>
            <span style={{fontSize: '25px'}}>122-452861-36250</span> 하나은행 (예금주:두드림재단)
        </Account>
        <Info>* 기부금은 헌혈증 기부 활동의 확대와 운영에 사용됩니다.</Info>
        <Info>기부문의 (월~금 09:00~18:00) / 점심시간 (12:30-14:00)</Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 7px;
`

const Account = styled.div`
    color : #fff;
    display : flex;
    align-items : baseline;
    gap : 9px;
    font-size : 13px;
`

const Info = styled.div`
    color: #999;
    text-align: right;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.325px;
`

export default DonationInfo