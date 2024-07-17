import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Notice from './Notice';


const Footer = () => {
    return (
        <Wrapper>
            <Logo/>
            <DescContainer>
                <Description/>
                <Notice />
            </DescContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height : 200px;
    background-color : #343434;
    display : flex;
    gap : 30px;
    box-sizing : border-box;
    padding : 30px 250px;
    width : 100%;
    position : absolute;
    bottom : 0;
`

const Logo = styled.div`
    width : 220px;
    height : 85px;
    background-color : #f1f1f1;
`

const DescContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
`




export default Footer;
