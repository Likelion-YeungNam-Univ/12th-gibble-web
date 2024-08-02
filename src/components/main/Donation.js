import React from 'react';
import styled from 'styled-components';

const Donation = () => {
    return (
        <Wrapper>
            <Box>
                <MainText>
                    <Color>   
                        <Text1>투명 절차를 실천하는</Text1>
                        <Text2>기블,</Text2>
                    </Color>
                    <Text3>믿고 기부하세요</Text3>
                </MainText>
                <Image src={require('../../assets/main/donation.png')} alt="기부" />
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 1200px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Box = styled.div`
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
    margin-left : 32px;
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



const Image = styled.img`
    width : 1416px;
    height : 690px;
    margin-top: 70px;
`;




export default Donation;