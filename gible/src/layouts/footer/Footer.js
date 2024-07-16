import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <FooterBox>
            <Explain>
                <Buttons>
                    <button>개인정보처리방침</button>
                    <button>이용약관</button>
                    <button>이메일 무단 수집거부</button>
                </Buttons>
                <Number>
                    <h1>0000-0000</h1>
                    <h7>월~금 9:00 ~ 18:00</h7>
                </Number>
            </Explain>
        </FooterBox>
    );
}


const FooterBox = styled.div`
    background: #F6F6F6;
    height: 262px; 
`;

const Explain = styled.div`
    color: #767676;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding: 80px;
    margin: 0px 300px

`;

const Buttons =styled.div`
    display: flex;
    gap : 40px;
    button {
    
        background: none; 
        border: none; 
        color: #767676; 
        font-size: 15px; 
        cursor: pointer; 

        /*포인터 올릴 시에 밑줄*/
        &:hover {
            text-decoration: underline; 
        } 
`;

const Number = styled.div`
    text-align: right;
    background: #F6F6F6;
`;


export default Footer;
