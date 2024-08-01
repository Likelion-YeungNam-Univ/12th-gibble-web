import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Notice from './Notice';
import logo from "@/assets/image/main-logo.png"


const Footer = () => {
    return (
        <Wrapper>
            <Logo src={logo}/>
            <DescContainer>
                <Description/>
                <Notice />
            </DescContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height : 190px;
    background-color : #343434;
    display : flex;
    gap : 30px;
    box-sizing : border-box;
    padding : 30px 250px;
    width : 100%;
    position : relative;
    bottom : 0;
`

const Logo = styled.img`
    width : 189px;
    height : 50px;
`

const DescContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
`

export default Footer;
