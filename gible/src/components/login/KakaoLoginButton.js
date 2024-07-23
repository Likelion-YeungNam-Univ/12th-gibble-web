import React from 'react'
import styled from 'styled-components'
import { ReactComponent as KakaoLogo } from '@/assets/svg/kakaoLogo.svg'
import { loginHandler } from '@/api/login/loginHandler'

const KakaoLoginButton = () => {

  return (
      <Wrapper onClick={() => loginHandler()}>
          <Logo />
          <Text>카카오로 시작하기</Text>
    </Wrapper>
      
  )
}

const Wrapper = styled.div`
    width : 80%;
    display : flex;
    text-align : center;
    justify-content : center;
    align-items : center;
    background-color : #FAE300;
    box-sizing : border-box;
    padding : 15px 0;
    
    border-radius : 8px;
    position : relative;

    cursor: pointer;
`

const Logo = styled(KakaoLogo)`
    position : absolute;
    left : 0;
    margin-left : 10px;
`

const Text = styled.p`
    color : #111;
    font-size : 16px;
    font-weight : 500;
`;

export default KakaoLoginButton