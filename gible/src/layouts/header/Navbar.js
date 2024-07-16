import React from 'react';
import styled from 'styled-components';

const Navigationbar = () => {
    return (
        <div className='Headers'>
            <Redbox>
                <Warning>일정관리와 관련된 작업은 2023년 6월 24일 이후 로그인하여야 하며, 현재 시점에는 가능합니다.</Warning>
            </Redbox>
           
            <LoginBox>
              <StyledBox />
            </LoginBox>
        
            <Navigation>
                <Buttons>
                    <button>커뮤니티</button>
                    <button>이벤트</button>
                    <button>사업소개</button>
                </Buttons>
           </Navigation>

        </div>

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


const LoginBox = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;

const StyledBox = styled.div`
    height: 60px;
    flex-shrink: 0;
    background: #FFF;
    width: 100%; 
`;



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

        /*포인터 올릴 시에 밑줄*/
        &:hover {
            text-decoration: underline; 
        } 
    }
      

`;



export default Navigationbar;
