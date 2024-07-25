import React from 'react';
import styled from 'styled-components';
import Warning from './Warning';
import HeadComponent from './HeadComponent';
import Navbar from './Navbar';

const Header = () => {
    return (
        <Wrapper>
            <Warning/>
            <HeadComponent/>
            <Navbar/>
        </Wrapper>

    );
}

const Wrapper = styled.div``

export default Header;
