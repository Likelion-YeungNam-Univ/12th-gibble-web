import React from "react";
import styled from "styled-components";

export const ContentNotice = () => {
  return (
    <Wrapper>
      <FormNotice>
        구체적인 상황을 <span style={{ fontWeight: "600" }}>상세히 설명</span>
        해주면 좋겠어요.
        <br />
        <span style={{ fontWeight: "600" }}>개인정보 (전화번호, 주민번호)</span>
        는 작성하지 말아주세요.
      </FormNotice>
    </Wrapper>
  );
};

export const TitleNotice = () => {
  return (
    <Wrapper>
      <FormNotice>
        <span style={{ fontWeight: "600" }}>간결하고 명확하게&nbsp;</span> 글의
        핵심 내용을 담는 게 좋아요.
      </FormNotice>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;

const FormNotice = styled.div`
  width: 75%;
  padding: 12px 24px;
  border-radius: 6px;
  border: 1px solid #fef3f4;
  background: #fef3f4;
  color: var(--gray-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.45px;
  margin-bottom: 10px;
`;
