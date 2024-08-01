import React from "react";
import styled from "styled-components";

const Description = ({ stepNum }) => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      {stepNum === 3 ? null : (
        <>
          <SubTitle>
            <SubTitleRed>한 장의 기부가 </SubTitleRed>
            누군가에겐
            <SubTitleRed> 큰 힘</SubTitleRed>이 됩니다.
          </SubTitle>
          <Desc>
            기블 홈페이지 회원이 되신다면 더욱 편리하게 서비스 이용이
            가능합니다.
          </Desc>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const SubTitle = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--36, 48px); /* 120% */
  letter-spacing: -1px;
  margin-bottom: 8px;
`;

const SubTitleRed = styled(SubTitle)`
  color: var(--main-color);
`;

const Desc = styled.div`
  color: #767676;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.45px;
  margin-top: 10px;
`;

export default Description;
