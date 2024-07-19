import React from "react";
import styled from "styled-components";
import MarketingBox from "./MarketingBox";
import SignUpBtn from "./SignUpBtn";

const InformationBox = ({ setStep }) => {
  return (
    <>
      <UserInformationBox>
        <UserInformationFormBox>
          <UserInformationForm>
            <UserInformationName>
              아이디<span style={{ color: "var(--main-color)" }}>*</span>
            </UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="아이디를 입력해주세요"
            />
            <UserInformationBtn type="button">ID 중복확인</UserInformationBtn>
          </UserInformationForm>
          <UserInformationPasswordFormBox>
            <UserInformationPasswordForm>
              <UserInformationName>
                비밀번호<span style={{ color: "var(--main-color)" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </UserInformationPasswordForm>
            <PasswordGuide>
              영문, 숫자, 특수문자 중 2가지 이상을 활용하여 10~ 15자리로
              입력해주세요.
            </PasswordGuide>
          </UserInformationPasswordFormBox>

          <UserInformationForm>
            <UserInformationName>
              비밀번호 확인<span style={{ color: "var(--main-color)" }}>*</span>
            </UserInformationName>
            <UserInformationInput
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
          </UserInformationForm>

          <UserInformationForm>
            <UserInformationName>
              성명<span style={{ color: "var(--main-color)" }}>*</span>
            </UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="성명을 입력해주세요."
            />
          </UserInformationForm>
          <UserInformationForm>
            <UserInformationName>
              휴대폰 번호<span style={{ color: "var(--main-color)" }}>*</span>
            </UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="휴대폰번호를 입력해주세요."
            />
          </UserInformationForm>
          <UserInformationForm>
            <UserInformationName>
              이메일<span style={{ color: "var(--main-color)" }}>*</span>
            </UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="이메일을 입력해주세요."
            />
            <UserInformationBtn type="button">인증하기</UserInformationBtn>
          </UserInformationForm>
          <UserInformationForm>
            <UserInformationName></UserInformationName>
            <UserInformationInput
              type="text"
              placeholder="인증번호 6자리를 입력해주세요."
            />
          </UserInformationForm>
        </UserInformationFormBox>
        <StyleHr2 />
        <MarketingBox />
        <SignUpBtn setStep={setStep} />
      </UserInformationBox>
    </>
  );
};

export default InformationBox;

const UserInformationBox = styled.div`
  padding: 0px 20%;
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
  width: 20%;
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
  width: 50%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const UserInformationBtn = styled.button`
  width: 20%;
  height: 100%;
  display: inline-flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  border: none;
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
  padding-left: 22%;
`;

const StyleHr2 = styled.hr`
  border: none;
  height: 1px;
  background: #dbdbdb;
`;
