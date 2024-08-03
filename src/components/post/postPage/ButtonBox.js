import React from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import donatePost from "@/api/post/donatePost";

const ButtonBox = ({ postId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const fetch = async (postId, data) => {
    const result = await donatePost({ postId, data });
    alert(result.data.response);
    if (result.statusCode === 200) navigate("/post");
  };

  const navigate = useNavigate();
  return (
    <Wrapper>
      <DonateForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
          fetch(postId, data.donateCount);
        })}
      >
        <InputWrapper>
          <Input
            type="number"
            placeholder="기부할 개수를 입력하세요."
            style={
              errors.donateCount && { border: "1px solid var(--main-color)" }
            }
            $customStyles={{
              borderRadius: "6px",
              border: "1px #DBDBDB",
              background: "#F6F6F6",
            }}
            {...register("donateCount", {
              required: "기부할 개수를 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 0 이상의 숫자",
              },
              maxLength: {
                value: 2,
                message: "99 이하의 숫자",
              },
            })}
          />
          {errors.donateCount && alert(errors.donateCount.message)}
        </InputWrapper>
        <Button type="submit">기부하기</Button>
      </DonateForm>
    </Wrapper>
  );
};

export default ButtonBox;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const DonateForm = styled.form`
  display: flex;
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
