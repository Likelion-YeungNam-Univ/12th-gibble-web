import React from "react";
import { Route, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Review = () => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleReissueClick = () => {
        navigate("/review");
    };

    return (
        <Wrapper>
            <Box>
                <Maintext>
                    <Text1>기블을 통한 사랑기부,<br />
                    기적의 힘</Text1>
                    <Text2>소중한 기부로 인해<br />
                    많은 이들에게 희망이 되었습니다.</Text2>
                    <Button onClick={handleReissueClick}>후기 더보기</Button>
                    <Logo src={require('../../assets/main/gibleLogo.png')} alt="logo" />
                </Maintext>
                <Picture1>
                    <Image src={require('../../assets/main/review/1.png')} alt="1" />
                    <Image src={require('../../assets/main/review/2.png')} alt="2" />
                </Picture1>
                <Picture2>
                    <Image src={require('../../assets/main/review/3.png')} alt="3" />
                    <Image src={require('../../assets/main/review/4.png')} alt="4" />
                </Picture2>
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 1600px;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
`;  

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1650px;
    height: 1600px;
    background: #F4F4F4;

`;  

const Logo = styled.img`
    width: 817px;
    height: 218px;
    margin-top: 820px;
`;

const Maintext = styled.div`
    width: 500px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
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

const Picture1 = styled.div`
    width: 640px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
`;

const Picture2 = styled.div`
    width: 600px;
    height: 1200px;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    
    margin-top: 200px;
`;

const Image = styled.img`
    width: 550px;
    height: 500px;
    background-color: #000;
    margin: 10px 0;
    border-radius: 6px;

`;

const Button = styled.button`
    background-color:#ffff;
    width:160px;
    height: 60PX;
    color: #111;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 136.364% */
    letter-spacing: -0.55px;    font-size: 20px;
    padding: 14px 24px;
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid #666;
    margin-top: 70px;
    
    cursor: pointer;

    &:hover {
        background: var(--main-color, #F42E3D);
        color : white;

    }
`;

export default Review;
