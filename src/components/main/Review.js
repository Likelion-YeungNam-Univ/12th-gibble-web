import React from "react";
import styled from "styled-components";

const Review = () => {
    return (
        <Wrapper>
            <Maintext>
                <Text1>기블을 통한 사랑기부,<br />
                기적의 힘</Text1>
                <Text2>소중한 기부로 인해<br />
                많은 이들에게 희망이 되었습니다.</Text2>
            </Maintext>
            <Picture1>
                <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
                <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
            </Picture1>
            <Picture2>
                <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
                <Image src={require('../../assets/main/bloodpaper.png')} alt="Main Banner" />
            </Picture2>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 1920px;
    height: 1300px;
`;  

const Maintext = styled.div`
    width: 640px;
    height: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text1 = styled.div`
    color: #111;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: var(--40, 50px); /* 125% */
    letter-spacing: -1px;
    margin : 20px; 
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
    align-items: center;
    justify-content: center;

`;

const Picture2 = styled.div`
    width: 640px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin : 200px 0px;
`;

const Image = styled.img`
    width: 550px;
    height: 500px;
    background-color: #000;
    margin: 10px 0;
`;

export default Review;
