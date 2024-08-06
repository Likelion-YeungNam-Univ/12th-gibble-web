import React from 'react'
import styled from 'styled-components'

const Information = () => {
  return (
    <Wrapper>
        <Container>
            <Content>(우)06348 서울 강남구 광평로 12길 2-1 (기블리빌딩) 3층 기블</Content>
            <Content>대표자 : 이태훈</Content>
            <Content>사업자등록번호 : 375-12-00486</Content>
        </Container>
        <Container>
            <Content>대표번호 : 1670 - 1122</Content>
            <Content>이메일 : gibble@gamil.com</Content>
        </Container>
        <Container>
            <Content>@2024 두드램재단 All Rights Reserved</Content>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    color: #999;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 184.615% */
    letter-spacing: -0.325px;
`;

const Container = styled.div`
    display : flex;
    gap : 23px;
`

const Content = styled.div``

export default Information