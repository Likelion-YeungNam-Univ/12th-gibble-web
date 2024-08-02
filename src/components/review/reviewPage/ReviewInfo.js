import InformationForm from '@/components/signup/step02/InformationForm'
import React from 'react'
import styled from 'styled-components'

const ReviewInfo = ({ info }) => {
  return (
    <Wrapper>
        <Category>작성자</Category>
        <Value>{info.writer}</Value>
        <Category>이메일</Category>
        <Value>{info.email}</Value>
        <Category>작성자</Category>
        <Value>{info.createdAt}</Value>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 24px 46px;
    font-size : 18px;
    display : flex;
    gap: 15px;
    background-color : #f6f6f6;
    border-top : 2px solid #dbdbdb;
    border-bottom : 2px solid #dbdbdb;

`

const Category = styled.div`
    color : #111;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`

const Value = styled.div`
    color: var(--gray-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`

export default ReviewInfo