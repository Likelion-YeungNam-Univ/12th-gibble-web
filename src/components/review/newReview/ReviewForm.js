import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputLabel from "@/components/common/InputLabel";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import InputFormFix from "./InputFormFix";
import { TitleNotice, ContentNotice, ImageNotice } from "./FormNotice";
import Error from "./Error";
import { storage } from "@/firebase/firebaseConfig";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import newReview from "@/api/review/newReview";
import { useNavigate } from "react-router-dom";
import store from "@/store/store";
import decodeToken from "@/utils/decodeToken";
import getUesrInfo from "@/api/post/getUesrInfo";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  // const state = store.getState();
  // console.log(state.auth.accessToken);
  // const jwtInfo = decodeToken(state.auth.accessToken);
  // console.log(jwtInfo);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const result = await getUesrInfo();
        setInfo(result.data.name);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };
    fetchInfo();
  }, [setInfo]);

  const fileInputRef = useRef(null);
  const [img, setImg] = useState(null);

  const title = watch("title", "");
  const content = watch("content", "");
  const navigate = useNavigate();

  const onClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Wrapper
      onSubmit={handleSubmit(async (data) => {
        // 게시글 링크 필요
        if (!img) return;

        const imageId = uuid();
        const storageRef = ref(storage, `review/${imageId}/${imageId}.png`);

        try {
          const snapshot = await uploadBytes(storageRef, img);
          const downloadUrl = await getDownloadURL(snapshot.ref);

          console.log({ ...data, imageUrl: downloadUrl });

          const result = await newReview({
            title: data.title,
            content: data.content,
            imageUrl: downloadUrl,
            imageId,
            postId: "ae4eae75-22ec-4b82-b163-a9312a785d59", // 수정 필요
          });

          navigate("/review/new/uploaded");
        } catch (error) {
          console.error("file upload to firebase error", error);
        }
      })}
    >
      <FormWrapper>
        <TextCount>{title.length}/30</TextCount>
        <InputWrapper>
          <InputLabel
            text={"제목"}
            isEssential={true}
            condition={"(30자 이하)"}
          />

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
              },
            })}
          />
        </InputWrapper>
        {title.length > 30 ? <Error text={"30자 이하로 작성해주세요"} /> : null}
        {errors.title && <Error text={errors.title.message} />}
        <TitleNotice />

        <TextCount>{content.length}/500</TextCount>
        <InputWrapper>
          <InputLabel
            text={"내용"}
            isEssential={true}
            condition={"(500자 이하)"}
          />
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
        {content.length > 500 ? (
          <Error text={"500자 이하로 작성해주세요"} />
        ) : null}
        {errors.content && <Error text={errors.content.message} />}
        <ContentNotice />

        <InputFormFix text={"이름"} content={info} />

        {/* 게시글 링크 필요 !! */}
        <InputWrapper style={{ marginTop: "32px" }}>
          <InputLabel text={"게시글링크"} isEssential={true} />
          <TmpContainer>
            <Input
              type="text"
              placeholder="어떤 게시글의 후기글인지 링크를 업로드해주세요"
              style={errors.link && { border: "1px solid var(--main-color)" }}
              $customStyles={{
                width: "400px",
                height: "52px",
                padding: "0 24px",
                display: "flex",
                flexShrink: "0",
              }}
            />
            <Button
              type="button"
              onClick={(e) => {
                console.log("clicked");
              }}
              $customStyles={{
                width: "150px",
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
              게시글 찾기
            </Button>
          </TmpContainer>
        </InputWrapper>

        <InputWrapper style={{ marginTop: "32px" }}>
          <InputLabel text={"인증사진 첨부"} />
          <TmpContainer>
            <input
              id="fileInput"
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <Input
              type="text"
              placeholder="이미지를 첨부해 주세요."
              style={errors.image && { border: "1px solid var(--main-color)" }}
              $customStyles={{
                width: "400px",
                height: "52px",
                padding: "0 24px",
                display: "flex",
              }}
              value={img && img.name}
              readOnly
            />
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
              $customStyles={{
                width: "150px;",
                background: "var(--main-color)",
                color: "#f4f4f4",
                transition: "0.2s",
                "&:hover": {
                  background: "var(--gray-color)",
                  color: "#fff",
                },
              }}
            >
              사진찾기
            </Button>
          </TmpContainer>
        </InputWrapper>
        {errors.image && <Error text={errors.image.message} />}
        <ImageNotice />
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
            background: "var(--gray-color)",
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

const TmpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 81%;
`;

export default ReviewForm;
