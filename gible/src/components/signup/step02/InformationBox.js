import React from "react";
import styled from "styled-components";
import MarketingBox from "./MarketingBox";
import InputComponent from "../InputComponent";
import InputLabel from "../InputLabel";
import ButtonComponent from "../ButtonComponent";

const InformationBox = ({ setStepNum }) => {
  return (
    <>
      <UserInformationBox>
        <UserInformationFormBox>
          <UserInformationForm>
            <InputLabel text={"이메일"} isEssential={true} />
            <InputComponent type={"text"} placeholder={"이메일을 입력해주세요."}/>
            <ButtonComponent text={"인증하기"} onClick={()=> console.log('clicked')} />
          </UserInformationForm>
          <UserInformationForm>
            <UserInformationName></UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="인증번호 6자리를 입력해주세요."
            />
          </UserInformationForm>
          <UserInformationPasswordFormBox>
            <UserInformationPasswordForm>
            <InputLabel text={"비밀번호"} isEssential={true} />
            <InputComponent type={"text"} placeholder={"비밀번호를 입력해주세요."}/>
            </UserInformationPasswordForm>
            <PasswordGuide>
              영문, 숫자, 특수문자 중 2가지 이상을 활용하여 10~ 15자리로
              입력해주세요.
            </PasswordGuide>
          </UserInformationPasswordFormBox>

          <UserInformationForm>
          <InputLabel text={"비밀번호 확인"} isEssential={true} />
          <InputComponent type={"text"} placeholder={"비밀번호를 한 번 더 입력해주세요."}/>
          </UserInformationForm>

          <UserInformationForm>
          <InputLabel text={"성명"} isEssential={true} />
          <InputComponent type={"text"} placeholder={"성명을 입력해주세요."}/>
          </UserInformationForm>
          <UserInformationForm>
          <InputLabel text={"휴대폰 번호"} isEssential={true} />
          <InputComponent type={"text"} placeholder={"휴대폰 번호를 입력해주세요."}/>
          </UserInformationForm>
        </UserInformationFormBox>
        <StyleHr2 />
        <MarketingBox />
        <ButtonComponent text={"회원가입"} onClick={()=>setStepNum(prev => prev+1)} customStyles={buttonStyle}></ButtonComponent>
      </UserInformationBox>
    </>
  );
};

export default InformationBox;

const buttonStyle = `
  width : 100%;
  background: #f4f4f4;
  color: #767676;
  transition: 0.2s;

  &:hover {
    background: var(--main-color);
    color: #fff;
  }
`

const UserInformationBox = styled.div`
  padding: 0px 15%;
`;

const UserInformationFormBox = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const UserInformationForm = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding-bottom: 24px;
  align-items: center;
  gap: 16px;
`;

const UserInformationName = styled.div`
  width: 146px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const UserInformationInput = styled.input`
  width: 420px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  font-family: pretendard;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const UserInformationPasswordFormBox = styled.div`
  padding-bottom: 24px;
  width: 100%;
`;

const UserInformationPasswordForm = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  align-items: center;
  gap: 16px;
  padding-bottom: 7px;
`;

const PasswordGuide = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-left: 19%;
`;

const StyleHr2 = styled.hr`
  border: none;
  height: 1px;
  background: #dbdbdb;
`;