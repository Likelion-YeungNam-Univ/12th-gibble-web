import React from "react";
import styled from "styled-components";
import MailAgreement from "./MailAgreement";
import Input from "@/components/common/Input";
import InputLabel from "../InputLabel";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";

const InformationForm = ({ setStepNum }) => {

    const {
      register,
      handleSubmit,
      formState: {errors, isSubmitted, isValid}
    } = useForm({ mode: "onSubmit"});

  return (
    <Wrapper 
      noValidate
      onSubmit={handleSubmit(data => {
        console.log('data',data)
        console.log(data.name);
        console.log(data.nickname);
        console.log(data.phoneNumber1 + '-' + data.phoneNumber2 + '-' + data.phoneNumber3)
      })}
    >
      <FormContainer>
        {/* 이메일 */}
        <InputContainer>  
          <InputLabel text={"이메일"} isEssential={true} $customStyles={`width: 30%`} />
          <Mail value={'test@gmail.com'} disabled={true}/>
        </InputContainer>

        {/* 성명 */}
        <InputContainer>
          <InputLabel text={"성명"} isEssential={true} $customStyles={`width: 30%`} />
          <Input
            type={"text"}
            placeholder={"이름을 입력해주세요."}
            $customStyles={`
              width: 100%;
              border : 1px solid ${isSubmitted && errors.name ? "var(--main-color)" : "#dbdbdb"};
              box-shadow: ${isSubmitted && errors.name ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};
              ` }
            {...register("name", {
              required : "성명 입력은 필수입니다."
            })}
          />
        </InputContainer>

        {/* 닉네임 */}
        <InputContainer>
          <InputLabel text={"닉네임"} isEssential={true} customStyles={`width: 30%`}/>
          <NicknameInputContainer>
            <Input
              type={"text"}
              placeholder={"닉네임을 확인해주세요."}
              $customStyles={`
                width: 80%;
                border : 1px solid ${isSubmitted && errors.nickname ? "var(--main-color)" : "#dbdbdb"};
                box-shadow: ${isSubmitted && errors.nickname ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};`}
              {...register("nickname",{
                required: "닉네임 입력은 필수입니다."
              })}
            />
            <Button
              $customStyles={`width: 15%`}
            >중복확인</Button>
          </NicknameInputContainer>
        </InputContainer>

        {/* 폰 번호 */}
        <InputContainer>
          <InputLabel text={"휴대폰 번호"} isEssential={true} customStyles={`width: 30%`} />
          <PhoneNumberInputContainer>
            <Input
              type={"number"}
              placeholder={"000"}
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${isSubmitted && errors.phoneNumber1 ? "var(--main-color)" : "#dbdbdb"};
                box-shadow: ${isSubmitted && errors.phoneNumber1 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};`}
              {...register("phoneNumber1",{
                required: "필수 입력입니다."
              })}
            />
            -
            <Input
              type={"number"}
              placeholder={"0000"}
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${isSubmitted && errors.phoneNumber2 ? "var(--main-color)" : "#dbdbdb"};
                box-shadow: ${isSubmitted && errors.phoneNumber2 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};`}
              {...register("phoneNumber2",{
                required: "필수 입력입니다."
              })}
            />
            -
            <Input
              type={"number"}
              placeholder={"0000"}
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${isSubmitted && errors.phoneNumber2 ? "var(--main-color)" : "#dbdbdb"};
                box-shadow: ${isSubmitted && errors.phoneNumber2 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};`}
              {...register("phoneNumber3",{
                required: "필수 입력입니다."
              })}
            />
          </PhoneNumberInputContainer>
        </InputContainer>
        <MailAgreement {...register("emailAgree")}/>
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
  width : 100%;
  box-sizing : border-box;
  padding : 0 10%;
`;

const FormContainer = styled.div`
  width : 100%;
  box-sizing: border-box;
  padding : 50px 5%;

`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height : 54px;
  padding-bottom: 24px;
  align-items: center;
  /* gap: 16px; */
`

const Mail = styled.div`
  width: 100%;
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
`;

const NicknameInputContainer = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : space-between;
`

const PhoneNumberInputContainer = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  gap: 10px;
`
