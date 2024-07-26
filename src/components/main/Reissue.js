import React from 'react';
import styled from 'styled-components';

const Reissue = () => {
    return (
        <Wrapper>
            <Maintext>
                <Text1>헌혈증서,<br />
                재발급이 가능해졌어요</Text1>
                <Text2>개정법 변화 어쩌고 .... 저쩌고</Text2>
            </Maintext>
            <Picture1>
                <Image1 src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
                <Text3>재발급 신청하러가기</Text3>
            </Picture1>
            <Picture2>
                <Image2 src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
            </Picture2>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 1920px;
    height: 900px;
`;

const Maintext = styled.div`
    width: 920px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin : 200px;
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
    color: #333;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--26, 36px); /* 138.462% */
    letter-spacing: -0.65px;
`;
const Text3 = styled.div`
    color: #333;
    text-align: right;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--26, 36px); /* 138.462% */
    letter-spacing: -0.65px;
    margin : 30px 0px;
`;

const Picture1 = styled.div`
    width: 700px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: darkorchid;

`;
const Picture2 = styled.div`
    width: 300px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
`;

const Image1 = styled.div`
    width: 700px;
    height: 320px;
`;

const Image2 = styled.div`
    width: 300px;
    height: 320px;
`;


export default Reissue;
