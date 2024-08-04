import React from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "@/assets/svg/heart.svg";

const DonorCard = ({ donor, isPermitted }) => {
  return (
    <Wrapper>
      <Heart />
      <DonorInfo>
        <Donor>{donor.nickname}</Donor>
        <DonatedCount>{donor.donateCount}개 기부 완료</DonatedCount>
        {isPermitted && <Report>신고하기</Report>}
      </DonorInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 140px;
  gap: 6px;
`;

const DonorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Donor = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.5px;
`;

const DonatedCount = styled.div`
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const Report = styled.div`
  color: var(--main-color, #f42e3d);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.35px;
  text-decoration-line: underline;
`;

export default DonorCard;
