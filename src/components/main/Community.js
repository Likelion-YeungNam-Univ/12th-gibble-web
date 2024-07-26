import React from 'react';
import styled from 'styled-components';

const Community = () => {
    return (
        <Wrapper>
            <MainText>
                <Text1>따스한 나눔에<br />함께 동참해주세요</Text1>
                <Text2>한 장의 기부가 누군가에겐 큰 힘이 됩니다.</Text2>
            </MainText>
            <Boxs>
                <Box1></Box1>

            </Boxs>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1440px;
    height: 1000px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const MainText = styled.div`
    width: 1440px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin : 30px 0px;

`;

const Text1 = styled.div`
      display: flex;
    text-align : left;
    color: #111;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px); /* 125% */
    letter-spacing: -1px;
`;
const Text2 = styled.div`
    display: flex;
    margin : 10px 0px;
    color: #333;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: var(--26, 36px); /* 138.462% */
    letter-spacing: -0.65px;
`;

const Boxs = styled.div`
    margin : 30px px;
    width : 1440px;
    height : 350px;
`;

const Box1 = styled.img`
    width : 1440px;
    height : 350px;
    margin : 0px 30px 30px 0px;
    background-color: #dcdcdc;
`;




export default Community;