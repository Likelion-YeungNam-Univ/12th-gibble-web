import React from 'react';
import styled from 'styled-components';

const Donation = () => {
    return (
        <Wrapper>
            <MainText>
                <Color>   
                    <Text1>투명 절차를 실천하는</Text1>
                    <Text2>기블,</Text2>
                </Color>
                <Text3>믿고 기부하세요</Text3>
            </MainText>
            <Images>
                <Image1 src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
                <Image2 src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
                <Image3 src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
            </Images>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: 1200px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;


const MainText = styled.div`
    width: 1440px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin : 30px 0px;

`;

const Color = styled.div`
    display: flex;

`;

const Text1 = styled.div`
    color: #111;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px); /* 125% */
    letter-spacing: -1px;
`;

const Text2 = styled.div`
    color: #F42E3D;
   font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px);
    letter-spacing: -1px;
`;

const Text3 = styled.div`
    display: flex;

    color: #111;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px); /* 125% */
    letter-spacing: -1px;
`;


const Images = styled.div`
    margin : 30px 0px;
    width : 1440px;
    height : 690px;
`;

const Image1 = styled.img`
    width : 480px;
    height : 690px;
`;


const Image2 = styled.img`
    width : 480px;
    height : 690px;
`;


const Image3 = styled.img`
    width : 480px;
    height : 690px;
    background-color: #dcdcdc;
`;


export default Donation;