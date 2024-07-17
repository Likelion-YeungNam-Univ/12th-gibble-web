import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <div className='Headers'>
            <Redbox>
                <Warning>혈액관리법 개정에 따라 2022년 09월 24일 이후 최초 발급된 헌혈증서부터 잃어버리거나 훼손 시 재발급 가능합니다</Warning>
            </Redbox>
           
            <LoginBox>
                <Login>
                    <button>로그인</button>
                </Login>
                <Search>
                    <search>
                     <input type="text" placeholder="검색어를 입력해주세요" />
                    </search>
                </Search>
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
    justify-content: flex-end;
    align-items: center; 
    height: 60px;
    flex-shrink: 0;
    background: #FFF;
    width: 100%; 


`;

const Login = styled.div`
    padding: 0px 80px;

    button {
        background: none; 
        border: none; 
        color: #767676; 
        font-size: 16px; 
        font-weight: 400; 
        cursor: pointer; 
        text-align: center;


        /*포인터 올릴 시에 밑줄*/
        &:hover {
            text-decoration: underline; 
        } 
`;


const Search = styled.div`
    padding: 0px 80px;

    input {
        border-radius: 8px;
        background: #F6F6F6;
        border: none; 

        padding: 15px 8px 15px 10px;
        font-size: 14px; 
        width: 200px; 
    }
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



export default Header;