import React from 'react';
import styled from 'styled-components';

const BloodIntro = () => {
    return (
        <Wrapper>
            <MainText>
                <Text1>헌혈증서</Text1>
                <Text2>를 소개합니다</Text2>
            </MainText>
            <SubText>
                헌혈증서는 헌혈자가 헌혈 후 받는 증서로,<br />
                수혈이 필요한 이들에게 생명의 기회를 제공합니다.
            </SubText>
            <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1920px;
    height: 750px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const MainText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text1 = styled.div`
    color: var(--main-color, #F42E3D);
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -1px;
    margin-right: 5px;
`;

const Text2 = styled.div`
    color: #111;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -1px;
`;

const SubText = styled.div`
    color: #333;
    font-size: 26px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.65px;
    margin-top: 20px;
`;

const Image = styled.img`
    margin-top: 30px;
    max-width: 80%;
    height: auto;
`;

export default BloodIntro;
