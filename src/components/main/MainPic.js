import React from 'react';
import styled from 'styled-components';

const MainPic = () => {
    return (
        <Wrapper>
            <Image src={require('../../assets/main/mainbanner.png')} alt="Main Banner" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
   padding : 0;
   display: flex;
    width : 100%;
    height: 800px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;

`;

const Image = styled.img`
    display: flex;
    height: 800px;
`;

export default MainPic;
