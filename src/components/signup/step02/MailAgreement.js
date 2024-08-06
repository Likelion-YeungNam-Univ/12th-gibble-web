import CheckBox from "@/components/common/CheckBox";
import React from "react";
import styled from "styled-components";

const MailAgreement = React.forwardRef(({ ...rest }, ref) => {
  return (
    <Wrapper>
      <Title>
        메일 수신 동의
        <span style={{ color: "var(--gray-color)" }}>&nbsp;(선택)</span>
      </Title>
      <SubTitle>메일 수신 동의 시 게시글 업로드 알림을 제공합니다.</SubTitle>
      <Description>
        <CheckBox {...rest} ref={ref} />
        <CheckBoxText>E-Mail 수신 동의</CheckBoxText>
      </Description>
    </Wrapper>
  );
});

export default MailAgreement;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  border-top: 1px solid #dbdbdb;
`;

const Title = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-top: 32px;
`;

const SubTitle = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-top: 20px;
`;

const CheckBoxText = styled.div`
  margin-right: 54px;
`;
