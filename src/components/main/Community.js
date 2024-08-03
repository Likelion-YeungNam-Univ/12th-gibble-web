import React from 'react';
import styled from 'styled-components';
import { Route, useNavigate } from "react-router-dom";


const Community = () => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleDonationClick = () => {
        navigate("/post");
    };

    return (
        <Wrapper>
            <Box>
                <MainText>
                    <Text1>따스한 나눔에<br />함께 동참해주세요</Text1>
                </MainText>
                <SmallText>
                    <Text2>작은 관심과 나눔이 모여 큰 기적을 만듭니다.</Text2>
                    <Button onClick={handleDonationClick}>커뮤니티 더보기</Button>
                </SmallText>
                <Image src={require('../../assets/main/community.png')} alt="커뮤니티" />
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 1900px;
    height: 600px;
    background-color: #ffff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Button = styled.div`
    background-color:#ffff;
    width:160px;
    height: 30PX;
    color: #111;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 136.364% */
    letter-spacing: -0.55px;    
    padding: 14px 24px;
    border-radius: 6px;
    border: 1px solid #666;
    margin-left: 765px;
    cursor: pointer;
    &:hover {
        color : #F42E3D;
        border-color: #F42E3D;
    }
`;

const SmallText = styled.div`
    display: inline-flex;
    width: 1410px;
    margin-bottom: 60px;
 
`;
const MainText = styled.div`
    width: 1410px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin-top: 30px;

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

const Image = styled.img`
    width: 1416px;
    height: 289px;
`;




export default Community;