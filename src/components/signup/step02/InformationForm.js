import React, { useState } from "react";
import styled from "styled-components";
import MailAgreement from "./MailAgreement";
import Input from "@/components/common/Input";
import InputLabel from "../InputLabel";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import signupHandler from "@/api/signup/signupHandler";
import { useNavigate } from "react-router-dom";
import store from "@/store/store";
import dupCheck from "@/api/login/dupCheck";

const InformationForm = ({ setStepNum }) => {
  const [nickname, setNickname] = useState();
  const [dup, setDup] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);

  const checkDup = async () => {
    setFirstCheck(true);
    const result = await dupCheck(nickname);

    if (result.statusCode === "555") {
      alert(result.message);
      return;
    }

    if (result.data.isDuplicated) {
      setDup(true);
    } else {
      setDup(false);
      alert("사용 가능한 닉네임입니다!");
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isValid },
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();
  const state = store.getState();
  const email = state.auth.email;
  console.log("state", state);
  const phoneNumber2 = watch("phoneNumber2");
  const phoneNumber3 = watch("phoneNumber3");

  return (
    <Wrapper
      noValidate
      onSubmit={handleSubmit(async (data) => {
        const result = await signupHandler({
          name: data.name,
          nickname: data.nickname,
          email: email,
          emailAgree: data.emailAgree,
          phoneNumber:
            data.phoneNumber1 +
            "-" +
            data.phoneNumber2 +
            "-" +
            data.phoneNumber3,
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
          <InputLabel
            text={"이메일"}
            isEssential={true}
            $customStyles={`width: 30%`}
          />
          <Mail disabled={true}>{state.auth.email}</Mail>
        </InputContainer>

        {/* 성명 */}
        <InputContainer>
          <InputLabel
            text={"성명"}
            isEssential={true}
            $customStyles={`width: 30%`}
          />
          <Input
            type={"text"}
            placeholder={"이름을 입력해주세요."}
            $customStyles={`
              width: 420px;
              border : 1px solid ${
                isSubmitted && errors.name ? "var(--main-color)" : "#dbdbdb"
              }`}
            {...register("name", {
              required: "이름 입력은 필수입니다.",
              validate: {
                validPattern: (value) =>
                  /^(?=.$)[ㄱ-ㅎ가-힣a-zA-Z0-9-_]*$/.test(value) ||
                  "이름은 2자리 이상 10자리 이하의 한글, 영문, 숫자 및 -_만 사용할 수 있습니다.",
                noSpace: (value) =>
                  !value.includes(" ") || "이름에 공백이 포함될 수 없습니다.",
              },
            })}
          />
        </InputContainer>

        {/* 닉네임 */}
        <InputContainer style={{ paddingBottom: "0px" }}>
          <InputLabel text={"닉네임"} isEssential={true} />
          <NicknameInputContainer>
            <DupContainer>
              <Input
                type={"text"}
                placeholder={"닉네임을 입력해주세요."}
                style={{
                  border: dup
                    ? "1px solid var(--main-color)"
                    : "1px solid #dbdbdb",
                }}
                $customStyles={`
    width: 420px;
    height: 54px;
    border : 1px solid ${
      isSubmitted && errors.nickname ? "var(--main-color)" : "#dbdbdb"
    }`}
                {...register("nickname", {
                  required: "닉네임 입력은 필수입니다.",
                  validate: {
                    validPattern: (value) =>
                      /^(?=.$)[ㄱ-ㅎ가-힣a-zA-Z0-9-_]*$/.test(value) ||
                      "닉네임은 2자리 이상 10자리 이하의 한글, 영문, 숫자 및 -_만 사용할 수 있습니다.",
                    noSpace: (value) =>
                      !value.includes(" ") ||
                      "닉네임에 공백이 포함될 수 없습니다.",
                  },
                  onChange: (e) => {
                    setNickname(e.target.value);
                    console.log("입력값 변경:", e.target.value);
                  },
                })}
              />

              <Button
                type="button"
                $customStyles={{ width: "15%", marginLeft: "16px;" }}
                onClick={checkDup}
              >
                중복확인
              </Button>
            </DupContainer>
          </NicknameInputContainer>
        </InputContainer>
        {dup && <Error>중복된 닉네임입니다.</Error>}

        {/* 폰 번호 */}
        <InputContainer style={{ marginTop: "32px" }}>
          <InputLabel
            text={"휴대폰 번호"}
            isEssential={true}
            customStyles={`width: 30%`}
          />
          <PhoneNumberInputContainer>
            <Input
              type={"number"}
              value="010"
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${
                  isSubmitted && errors.phoneNumber1
                    ? "var(--main-color)"
                    : "#dbdbdb"
                }`}
              {...register("phoneNumber1", {
                required: "필수 입력입니다.",
              })}
            />
            -
            <Input
              type={"number"}
              placeholder={"0000"}
              value={phoneNumber2}
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${
                  isSubmitted &&
                  (errors.phoneNumber2 ||
                    (phoneNumber2.length !== 4 && phoneNumber2.length > 0))
                    ? "var(--main-color)"
                    : "#dbdbdb"
                }`}
              {...register("phoneNumber2", {
                required: "필수 입력입니다.",
                validate: {
                  length: (value) =>
                    value.length === 4 || "전화번호는 4자리여야 합니다.",
                },
              })}
            />
            -
            <Input
              type={"number"}
              placeholder={"0000"}
              $customStyles={`
                width: 120px; 
                text-align: center;
                border : 1px solid ${
                  isSubmitted &&
                  (errors.phoneNumber3 ||
                    (phoneNumber3.length !== 4 && phoneNumber3.length > 0))
                    ? "var(--main-color)"
                    : "#dbdbdb"
                };`}
              {...register("phoneNumber3", {
                required: "필수 입력입니다.",
                validate: {
                  length: (value) =>
                    value.length === 4 || "전화번호는 4자리여야 합니다.",
                },
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
        disabled={!isValid || dup || !firstCheck}
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

const DupContainer = styled.div`
  display: flex;
`;

const Error = styled.div`
  padding: 5px;
  color: var(--main-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-left: 135px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding-bottom: 32px;
  align-items: center;
  /* gap: 16px; */
`;

const Mail = styled.div`
  width: 380px;
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

const NicknameInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const PhoneNumberInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
