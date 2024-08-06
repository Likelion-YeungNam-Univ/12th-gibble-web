import React from "react";
import Notice from "./Notice";
import Agreement from "./Agreement";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import CheckBox from "../../common/CheckBox";

const Step01 = ({ setStepNum }) => {
  const agreement = [
    "만 14세 이상입니다.",
    "개인정보 수집 및 이용에 대한 안내",
  ];
  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const checkAllValue = watch("agree") || [];
  console.log("checkAllValue", checkAllValue);

  let isAllChecked = true;
  for (let i of checkAllValue) {
    isAllChecked = isAllChecked && i;
  }

  return (
    <Wrapper
      noValidate
      onSubmit={handleSubmit((data) => {
        setStepNum((prev) => prev + 1);
      })}
    >
      {agreement.map((el, idx) => (
        <Agreement
          key={idx}
          text={el}
          {...register(`agree.${idx}`, {
            // name 밑에 .을 붙여 agree라는 이름을 가진 배열의 인덱스로 등록
            required: "동의는 필수입니다.",
          })}
          id={`agree-${idx}`}
        />
      ))}
      <Notice />

      <AgreeContainer>
        <CheckBox
          type="checkbox"
          {...register(`agree.${agreement.length}`, {
            required: "필수입니다.",
          })}
          id={`agree-${agreement.length}`}
        />
        <label htmlFor={`agree-${agreement.length}`}>동의합니다.</label>
      </AgreeContainer>
      <BtnContainer>
        <Button
          type="submit"
          disabled={!isAllChecked || checkAllValue.length === 0}
          $customStyles={buttonStyle}
        >
          다음
        </Button>
      </BtnContainer>
    </Wrapper>
  );
};

const Wrapper = styled.form``;

const buttonStyle = `
  background-color: var(--main-color);
  align-self: end;
  transition : 0.2s;
  &:disabled{
    cursor: default;
    background-color : #ccc;
  }
`;

const AgreeContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 24px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;

export default Step01;
