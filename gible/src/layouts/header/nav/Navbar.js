import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Navigation>
            <Buttons>
                <button>커뮤니티</button>
                <button>이벤트</button>
                <button>사업소개</button>
            </Buttons>
        </Navigation>
    );
}

/* hf-79 라우팅 이동 버튼 
            <button onClick={onClickCommunityButton}>커뮤니티</button> 
            <button onClick={onClickEventeButton}>이벤트</button>
            <button onClick={onClickInfoButton}>사업소개</button>
*/

const Navigation = styled.div`
    height: 60px;
    justify-content: center;
    background-color: white;
    display: flex;
    align-items: center; 
    
    /* 위 아래 테두리 */
    border-top: 2px solid #DBDBDB; 
    border-bottom: 2px solid #DBDBDB; 
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    /* 버튼 간격 조절 */
    gap: 400px; 
    
    button {
        background: none; 
        border: none; 
        color: black; 
        font-size: 20px; 
        font-weight: 700; 
        cursor: pointer; 
    }

`;

export  default Navbar;

