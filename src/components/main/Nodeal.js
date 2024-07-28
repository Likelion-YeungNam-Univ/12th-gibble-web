import React from 'react';
import styled from 'styled-components';

const Nodeal = () => {
    return (
        <Wrapper>
            <MainText>
                <Text1>혈액 거래 절대 안돼!</Text1>
                <Text2>헌혈증은 생명을 위한 것입니다.<br />불법 거래는 그 소중한 가치를 해칩니다.</Text2>
            </MainText>
            <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1920px;
    height: 950px;
    justify-content: center;
    align-items: center;
    text-align: left; /* 텍스트를 왼쪽으로 정렬 */
`

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: flex-start; /* 텍스트를 왼쪽 정렬 */
    width: 80%; 
    
`;

const Text1 = styled.div`
    color: #111;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px); 
    letter-spacing: -1px;
    margin : 20px;
`;

const Text2 = styled.div`
    color: #333;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--26, 36px); 
    letter-spacing: -0.65px;
    margin : 20px;
`;

const Image = styled.img`
    margin-top: 30px;
    height: 500px;
    width: 1920px;
    background-color: #dcdcdc;
`;

export default Nodeal;
