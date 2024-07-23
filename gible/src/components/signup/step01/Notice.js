import React from "react";
import styled from "styled-components";
import CheckBox from "../CheckBox";

const Notice = () => {
  return (
    <Box>
      <AgreementBox>
        <AgreementTitle>
          기블은 개인정보 보호법에 따라 회원가입을 위한 개인정보 수집 및 이용에
          대해 아래와 같이 안내 드립니다. 내용을 읽어보신 후 동의여부를 결정하여
          주시기 바랍니다.
        </AgreementTitle>
        <AgreementDescription>
          1. 개인정보 수집 및 이용 목적 <br />
          &nbsp;&nbsp;1. 회원관리
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원 서비스 이용 및 본인확인 <br />
          &nbsp;&nbsp;2. 헌혈서비스 신청 및 처리
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;홈페이지: 증명서
          신청, 고객의소리 상담신청, 이벤트 신청, 헌혈예약, 나눔히어로즈 가입
          신청 <br />
          &nbsp;&nbsp;3. 헌혈서비스 조회
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원가입 후 헌혈자 인증을 하시면
          이용자의 헌혈 정보와 회원정보가 연계되어 아래의 서비스를 이용하실 수
          있습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;홈페이지:
          헌혈횟수 및 검사결과 조회, 헌혈예약내역, 증명서 신청내역, 이벤트
          신청내역, 커뮤니티 이용내역, 상담내역, 기부권 사용내역,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABO Friends
          정보, 명예의전당 내역
          <br />
          &nbsp;&nbsp;4. 헌혈 기록, 검사결과 조회 등의 헌혈 관련 정보는 회원가입
          외에 헌혈자 인증절차를 거쳐 확인하실 수 있으며 해당 정보는
          혈액정보관리시스템 내<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용자의 헌혈정보와 연계되어 서비스
          됩니다.
        </AgreementDescription>
      </AgreementBox>
      <AgreementCheckBox>
        <CheckBox type="checkbox" />
        <span>동의합니다.</span>
      </AgreementCheckBox>
    </Box>
  );
};

export default Notice;

const Box = styled.div`
  margin: 20px 0;
`;

const AgreementBox = styled.div`
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
`;

const AgreementTitle = styled.div`
  overflow: hidden;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--20, 28px); /* 140% */
  letter-spacing: -0.5px;
`;

const AgreementDescription = styled.div`
  color: #767676;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--20, 28px);
  letter-spacing: -0.5px;
`;

const AgreementCheckBox = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 0px;
  align-items: center;
`;
