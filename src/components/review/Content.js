import React from "react";
import Button from "@/components/common/Button";
import styled from "styled-components";
import { ReactComponent as Check } from "@/assets/svg/circle-check-solid.svg";
import { useNavigate } from "react-router-dom";

const Content = ({review}) => {

  const navigate = useNavigate();
  return (
    <Wrapper>
      <CheckImg />
      <Title>소중한 후기를 남겨주셔서 감사합니다.</Title>
      <Description>
        여러분의 후기는 다른 기부자들과 사용인에게 큰 힘이 됩니다.
      </Description>
      <Notice>
        헌혈증 기부 활동을 더 널리 알리고 지속할 수 있도록, <br />
        아래 후원 계좌로 소정의 금액을 기부해 주시면 감사하겠습니다. <br />
        기부금은 헌혈증 기부 활동의 확대와 운영에 사용됩니다.
      </Notice>
      <ButtonsWrapper>
        <Button
          onClick={() => navigate('/review')}
          customStyles={ComunityBtnStyle}
        >투명후기 가기</Button>
        <Button
          onClick={() => navigate(`/review/${review}`)}
          customStyles={PostBtnStyle}
        > 
        작성글 보러가기</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
`;

const CheckImg = styled(Check)`
  width: 56px;
  height: 56px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 58px; /* 120.833% */
  letter-spacing: -1.2px;
  margin-top: 38px;
`;

const Description = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 131.818% */
  letter-spacing: -0.55px;
  margin-top: 14px;
`;

const Notice = styled.div`
  display: flex;
  width: 564px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  border-radius: 6px;
  background: #fef3f4;
  text-align: center;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px);
  letter-spacing: -0.45px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 68px;
  margin-bottom: 150px;
  display: flex;
  gap: 16px;
`;

const ComunityBtnStyle = `
  border: 1px solid var(--main-color);
  background-color: white;
  color: var(--main-color);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;

const PostBtnStyle = `
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;
