import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputLabel from "@/components/common/InputLabel";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import InputFormFix from "./InputFormFix";
import { TitleNotice, ContentNotice, ImageNotice } from "./FormNotice";
import Error from "./Error";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const title = watch("title", "");
  const content = watch("content", "");

  useEffect(() => {
    console.log("fileInputRef:", fileInputRef.current);
  }, []);

  const onClick = () => {
    console.log("사진찾기 버튼 클릭됨");
    document.getElementById("fileInput").click();
  };


  return (
    <Wrapper
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("link", data.link);
        if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
      console.log("Selected image:", data.image[0]);
    } else {
      console.log("No image selected");
    }
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
   }
        console.log("data", data);
        alert(JSON.stringify(data));
      })}
    >
      <FormWrapper>
        <TextCount>{title.length}/30</TextCount>
        <InputWrapper>
          <InputLabel text={"제목"} isEssential={true} condition={"(30자 이하)"} />

          <Input
            type="text"
            placeholder="제목을 입력해 주세요."
            style={errors.title && { border: "1px solid var(--main-color)" }}
            $customStyles={{
              width: "81%",
              height: "52px",
              padding: "0 24px",
            }}
            {...register("title", {
              required: "제목을 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 1자 이상",
              },
              maxLength: {
                value: 30,
                message: "최대 30자 이하",
              },
            })}
          />
        </InputWrapper>
        {errors.title && <Error text={errors.title.message} />}
        <TitleNotice />

        <TextCount>{content.length}/500</TextCount>
        <InputWrapper>
          <InputLabel text={"내용"} isEssential={true} condition={"(500자 이하)"} />
          <TextArea
            placeholder="어떠한 좋은 기적이 일어났는지 적어주세요"
            style={errors.content && { border: "1px solid var(--main-color)" }}
            {...register("content", {
              required: "내용을 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 1자 이상",
              },
              maxLength: {
                value: 500,
                message: "최대 500자 이하",
              },
            })}
          />
        </InputWrapper>
        {errors.content && <Error text={errors.content.message} />}
        <ContentNotice />

        <InputFormFix text={"이름"} content={"홍길동"} />

        <InputWrapper style={{ marginTop: "32px" }}>
          <InputLabel text={"게시글링크"} isEssential={true} />
          <Input
            type="text"
            placeholder="어떤 게시글의 후기글인지 링크를 업로드해주세요"
            style={errors.link && { border: "1px solid var(--main-color)" }}
            $customStyles={{
              width: "81%",
              height: "52px",
              padding: "0 24px",
              display: "flex",
              flexShrink: "0",
            }}
            {...register("link", {
              required: "링크를 입력해주세요.",
            })}
          />
        </InputWrapper>
        {errors.link && <Error text={errors.link.message} />}

        <InputWrapper style={{ marginTop: "32px", alignItems: "center" }}>
          <InputLabel text={"인증사진 첨부"} isEssential={true} />
          <input
            id="fileInput"
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            {...register("image", {
              required: "이미지를 첨부해주세요.",
              onChange: (e) => {
                if (e.target.files[0]) {
                  setSelectedFileName(e.target.files[0].name);
                }
              },
            })}
          />
          <Input
            type="text"
            placeholder="이미지를 첨부해 주세요."
            style={errors.image && { border: "1px solid var(--main-color)" }}
            $customStyles={{
              width: "58%",
              height: "52px",
              padding: "0 24px",
              display: "flex",
              flexShrink: "0",
            }}
            value={selectedFileName}
            readOnly
          />
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
            $customStyles={{
              width: "15%",
              background: "var(--main-color)",
              color: "#f4f4f4",
              marginLeft: "8px",
              transition: "0.2s",
              "&:hover": {
                background: "var(--gray-color)",
                color: "#fff",
              },
            }}
          >
            사진찾기
          </Button>
        </InputWrapper>
        {errors.image && <Error text={errors.image.message} />}
        <ImageNotice/>

      </FormWrapper>
      <Button
        type="submit"
        $customStyles={{
          width: "100%",
          background: "var(--main-color)",
          color: "#f4f4f4",
          marginTop: "108px",
          transition: "0.2s",
          "&:hover": {
            ackground: "var(--gray-color)",
            color: "#fff",
          },
        }}
      >
        작성하기
      </Button>

    </Wrapper>
  );
};

const Wrapper = styled.form``;

const FormWrapper = styled.div`
  margin: 0 168px;
`;

const TextCount = styled.div`
  text-align: end;
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 30px;
  color: var(--gray-color);
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 75%;
  height: 561px;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px);
  letter-spacing: -0.45px;
  font-family: pretendard;
  resize: none;
  &::placeholder {
    color: #dbdbdb;
  }
`;

export default ReviewForm;