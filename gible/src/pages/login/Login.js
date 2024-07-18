import KakaoLoginButton from '@/components/login/KakaoLoginButton'
import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <Title >방문해 주셔서 감사합니다!</Title>
                <Description>
                    기블은 고객님의 정보를 소중하게 생각합니다.
                    <br/>
                    홈페이지 로그인을 통해 소중한 기부활동, 회원 전용 이벤트 등 다양한 서비스를 이용해 보세요.
                </Description>
                <KakaoLoginButton/>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items: center;
`

const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 20px;
    box-sizing : border-box;
    width : 45%;
`

const Logo = styled.div`
    width : 285px;
    height : 60px;
    background-color : #f1f1f1;
`

const Title = styled.div`
    font-size : 40px;
    font-weight : bold;
`

const Description = styled.div`
    font-size : 18px;
    color : #767676;
    text-align : center;
    margin-bottom : 30px;
`

export default Login