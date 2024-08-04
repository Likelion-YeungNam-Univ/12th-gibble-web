import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GoToIcon } from '@/assets/svg/goto.svg'
import { useNavigate } from 'react-router-dom'

const GoToMyPost = ({name, post, title}) => {
    const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`post/${post}`)}>
        <Left>
            <Text style={{color:"#111"}}>{name}님 게시글 보러가기</Text>
            <Text>{title}</Text>
        </Left>
        <GoToIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 354px;
    box-sizing : border-box;
    padding : 10px;
    border: 1px solid #dbdbdb;
    display : flex;
    justify-content : end;
    align-items : center;
    cursor: pointer;
    transition : 0.3s;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
`

const Left = styled.div`
    display : flex;
    flex-direction : column;
`

const Text = styled.div`
    color: #767676;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.4px;
`

export default GoToMyPost