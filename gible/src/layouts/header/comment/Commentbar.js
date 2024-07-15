import React from 'react';
import styled from 'styled-components';

const Commentbar = () => {
    return (
        <Redbox>
            <Warning>일정관리와 관련된 작업은 2023년 6월 24일 이후 로그인하여야 하며, 현재 시점에는 가능합니다.</Warning>
        </Redbox>
    );
}

const Redbox = styled.div`
    height: 42px;
    flex-shrink: 0;
    background: var(--main-color, #F42E3D);
   

`;

const Warning = styled.div`
    color: #FFF;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--14, 22px); /* 157.143% */
    letter-spacing: -0.35px;
    height: 42px;
    align-content: center;
    text-align: center;

`;


export default Commentbar;
