import BloodIntro from '@/components/main/BloodIntro';
import MainPic from '@/components/main/MainPic';
import Review from '@/components/main/Review';
import Nodeal from '@/components/main/Nodeal';
import Reissue from '@/components/main/Reissue';
import Donation from '@/components/main/Donation';
import Community from '@/components/main/Community';
import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Wrapper>
            <Container>
                <MainPic />
                <BloodIntro />
                <Review />
                <Nodeal />
                <Reissue />
                <Donation/>
                <Community/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0;
    width : 100%;
    min-height : 100%;    
    box-sizing : border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height : 100%;    
    width: 100%;
    box-sizing: border-box;
`;

export default Main;
