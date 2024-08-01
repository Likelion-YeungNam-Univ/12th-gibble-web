import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ReviewCard = ({review}) => {
    const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/review/${review.id}`)}>
        <Image/>
        <Description>
            <Title>{review.title}</Title>
            <Date>{review.createAt}</Date>
        </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 32%;
    height : 280px;
    border-radius : 6px;
    box-sizing : border-box;
    border: 1px solid #DDD;
    cursor: pointer;
    margin-bottom : 30px;
    transition : 0.3s;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

`

const Image = styled.div`
    width : 100%;
    height : 200px;
    background-color : #ccc;
    border-radius : 6px 6px 0 0 ;
`

const Description = styled.div`
    width : 100%;
    height : 80px;
    box-sizing : border-box;
    border-radius : 0 0 6px 6px;
    border: 1px solid #D9D9D9;
    padding : 10px 16px;
    display : flex;
    flex-direction  : column;
    justify-content : space-around;
    
`

const Title = styled.div`
    color: #111;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`

const Date = styled.div`
    color: #797979;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`

export default ReviewCard