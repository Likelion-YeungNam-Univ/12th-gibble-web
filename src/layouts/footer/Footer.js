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
                <Hr/>
                <Notice />
            </DescContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height : 190px;
    background-color : #343434;
    display : flex;
    box-sizing : border-box;
    padding : 30px 252px;
    width : 100%;
    position : relative;
    bottom : 0;
`

const Logo = styled.img`
    width : 189px;
    height : 50px;
    margin-right : 101px;
`

const DescContainer = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
`

const Hr = styled.div`
    height : 2px;
    background-color : #444;
    margin-bottom : 20px;
`

export default Footer;
