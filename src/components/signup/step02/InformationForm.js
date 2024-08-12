import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MailAgreement from "./MailAgreement";
import Input from "@/components/common/Input";
import InputLabel from "../InputLabel";
import Button from "@/components/common/Button";
import signupHandler from "@/api/signup/signupHandler";
import store from "@/store/store";
import nicknameDupCheck from "@/api/login/nicknameDupCheck";

const InformationForm = ({ setStepNum }) => {
  const [isDupNickname, setIsDupNickname] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isValid },
  } = useForm(
    { mode: "onChange" });

  const state = store.getState();
  // const email = state.auth.email;
  const email = "test@gmail.com";

  const checkDup = async () => {
    const nickname = watch('nickname');

    if (!nickname || errors.nickname) { // 닉네임 양식 불충족 시
      alert('닉네임 양식을 맞춰주세요!');
      return;
    }

    try {
      const result = await nicknameDupCheck(nickname);

      if (result.isDuplicatedNickname) {
        alert('이미 존재하는 닉네임입니다!');
      } else {
        alert('사용 가능한 닉네임입니다!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper
      noValidate
      onSubmit={handleSubmit(async (data) => {
        const phoneNumber = data.phoneNumber.prefix + '-' + data.phoneNumber.middle + '-' + data.phoneNumber.last;
        const result = await signupHandler({
          name: data.name,
          nickname: data.nickname,
          email,
          emailAgree: data.emailAgree,
          phoneNumber
        });

        if (result.statusCode === 201) {
          setStepNum((prev) => prev + 1);
        } else {
          navigate("/error");
        }
      })}
    >
      <FormContainer>


        {/* 이메일 */}
        <InputContainer>
          <InputLabel text={"이메일"} isEssential={true} />
          <MailInput disabled={true}>{state.auth.email}</MailInput>
        </InputContainer>

        {/* 성명 */}
        <Error>
          {errors.name && errors.name.message}
        </Error>
        <InputContainer>
          <InputLabel text={"성명"} isEssential={true} />
          <CustomInput
            placeholder={"이름을 입력해주세요."}
            style={
              errors.name 
                ? { border: "1px solid var(--main-color)" } 
                : { border: "1px solid #dbdbdb" }
            }
            {...register("name", {
              required: "이름 입력은 필수입니다.",
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: "이름에는 한글, 영어만 사용할 수 있으며, 공백은 포함될 수 없습니다."
              }
            })}
          />
        </InputContainer>
        
        {/* 닉네임 */}
        <Error>{errors.nickname && errors.nickname.message}</Error>
        <InputContainer>
          <InputLabel text={"닉네임"} isEssential={true} />
              <CustomInput
                type={"text"}
                placeholder={"닉네임을 입력해주세요."}
                style={
                  errors.nickname 
                    ? { border: "1px solid var(--main-color)" } 
                    : { border: "1px solid #dbdbdb" }
                }
                {...register("nickname", {
                  required: "닉네임 입력은 필수입니다.",
                  pattern: {
                    value: /^[가-힣a-zA-Z0-9-_]+$/,
                    message: "닉네임에는 한글, 영어, 숫자, -, _만 사용할 수 있으며, 공백은 포함될 수 없습니다."
                  }
                })}
              />

              <Button
                type="button" // form 제출 방지
                $customStyles={{ width: "109px", marginLeft: "16px", transition:"0.4s" }}
                onClick={checkDup}
                disabled={errors.nickname}
              >
                중복확인
              </Button>
        </InputContainer>

        {/* 폰 번호 */}
        <Error>
          {errors.phoneNumber &&
            '입력 양식을 지켜주시기 바랍니다.'
          }
        </Error>
        <InputContainer>
          <InputLabel text={"휴대폰 번호"} isEssential={true} />
          <PhoneNumberInputContainer>
            <CustomPnInput
              type="number"
              placeholder="010"
              style={
                errors.phoneNumber && errors.phoneNumber.prefix
                  ? { border: "1px solid var(--main-color)" } 
                  : { border: "1px solid #dbdbdb" }
              }
              {...register("phoneNumber.prefix", {
                required: "필수 입력입니다.",
                maxLength: {
                  value: 3,
                  message : "입력 양식을 지켜주시길 바랍니다."
                }
              })}
            />
            -
            <CustomPnInput
              type="number"
              placeholder="0000"
              style={
                errors.phoneNumber && errors.phoneNumber.middle
                  ? { border: "1px solid var(--main-color)" } 
                  : { border: "1px solid #dbdbdb" }
              }
              {...register("phoneNumber.middle", {
                required: "필수 입력입니다.",
                maxLength: {
                  value: 4,
                  message : "입력 양식을 지켜주시길 바랍니다."
                }
              })}
            />
            -
            <CustomPnInput
              type="number"
              placeholder="010"
              style={
                errors.phoneNumber && errors.phoneNumber.last 
                  ? { border: "1px solid var(--main-color)" } 
                  : { border: "1px solid #dbdbdb" }
              }
              {...register("phoneNumber.last", {
                required: "필수 입력입니다.",
                maxLength: {
                  value: 4,
                  message : "입력 양식을 지켜주시길 바랍니다."
                }
              })}
            />
          </PhoneNumberInputContainer>
        </InputContainer>
        <MailAgreement {...register("emailAgree")} />
      </FormContainer>

      <Button
        type="submit"
        $customStyles={`
          width: 100%;
          transition:0.2s;
          `}
        disabled={!isValid}
      >
        회원가입
      </Button>
    </Wrapper>
  );
};

export default InformationForm;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
`;

const FormContainer = styled.div`
  width: 80%;
  box-sizing: border-box;
  padding: 50px 5%;
`;

const Error = styled.div`
  color: var(--main-color);
  font-size: 12px;
  display : flex;
  height : 18px;
  align-items : end;
  font-style: normal;
  font-weight: 400;
  margin-left: 135px;
  margin-bottom : 3px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  margin-bottom : 10px;
  align-items: center;
  /* gap: 16px; */
`;

const MailInput = styled(Input)`
  width: 420px;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const CustomInput = styled(Input)`
  width : 420px;
`

const CustomPnInput = styled(Input)`
  width: 120px; 
  text-align: center;
`

const PhoneNumberInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
