import React from 'react'
import styled from 'styled-components'

const EventNavbar = () => {
    const location = ['전국', '서울', '경기', '인천', '강원', '충북', '충남', '대구/경북', '경남', '울산', '부산', '전북', '광주/전남', '제주'];
    return (
        <Wrapper>
            {location.map(loc => <Category>{loc}</Category>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin-bottom : 30px;
`

const Category = styled.div`
    font-size : 20px;
    color : #767676;
    transition : 0.3s;
    cursor: pointer;

    &:hover{
        color : var(--main-color);
        font-weight : bold;
    }
`

export default EventNavbar