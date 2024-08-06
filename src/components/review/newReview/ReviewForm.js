import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import getUserInfo from "@/api/post/getUserInfo";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [info, setInfo] = useState(null);
  const fileInputRef = useRef(null);
  const [img, setImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [postId, setPostId] = useState(searchParams.get("post") || null);
  const [selectedPostTitle, setSelectedPostTitle] = useState(
    searchParams.get("title") || null
  );

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const result = await getUserInfo();
        setInfo(result.data.name);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };
    fetchInfo();
  }, [setInfo]);

  const title = watch("title", "");
  const content = watch("content", "");
  const navigate = useNavigate();

  const onClick = () => {
    document.getElementById("fileInput").click();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePostSelect = (title) => {
    setSelectedPostTitle(title);
  };

  const customInputStyle = {
    ...(errors.link && { border: "1px solid var(--main-color" }),
    ...(searchParams.get("title") && {
      backgroundColor: "#f1f1f1",
      cursor: "default",
    }),
    width : "100%",
  };



  return (
    <Wrapper
      onSubmit={handleSubmit(async (data) => {
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
            postId, // 수정 필요
          });

          navigate(`/review/new/uploaded?review=${result.reviewId}`);
        } catch (error) {
          console.error("file upload to firebase error", error);
        }
      })}
    >
      <FormWrapper>

        <InputWrapper>
          <Left/>
          <Middle>
            <TextCount>
            {title.length}/30
            </TextCount>
          </Middle>
          <Right/>
        </InputWrapper>

        <InputWrapper>
          <Left>
            <InputLabel
              text={"제목"}
              isEssential={true}
              condition={"(30자 이하)"}
            />
          </Left>
          <Middle>
            <Input
              type="text"
              placeholder="제목을 입력해 주세요."
              style={errors.title && { border: "1px solid var(--main-color)" }}
              $customStyles={cstInputStyle}
              {...register("title", {
                required: "제목을 입력해주세요.",
                minLength: { value: 1, message: "최소 1자 이상 입력해야 합니다." },
                maxLength: { value: 30, message: "최대 30자까지 입력 가능합니다." },
              })}
            />
            
          </Middle>
          <Right/>
        </InputWrapper>

        <InputWrapper>
            <Left/>
            <Middle>
            {title.length > 30 ? <Error text={"30자 이하로 작성해주세요"} /> : null}
            {errors.title && <Error text={errors.title.message} />}
            </Middle>
            <Right/>
        </InputWrapper>
        
        <InputWrapper>
          <Left/>
          <Middle>
            <TitleNotice />
          </Middle>
          <Right/>
        </InputWrapper>

        <InputWrapper>
          <Left/>
          <Middle>
            <TextCount>
            {content.length}/500
            </TextCount>
          </Middle>
          <Right/>
        </InputWrapper>

        <InputWrapper style={{alignItems: "start"}}>
          <Left>
            <InputLabel
              text={"내용"}
              isEssential={true}
              condition={"(500자 이하)"}
            />
          </Left>
          <Middle>
            <TextArea
              placeholder="어떠한 좋은 기적이 일어났는지 적어주세요"
              style={errors.content && { border: "1px solid var(--main-color)" }}
              {...register("content", {
                required: "내용을 입력해주세요.",
                minLength: { value: 1, message: "최소 1자 이상" },
                maxLength: { value: 500, message: "최대 500자 이하" },
              })}
            />
          </Middle>
          <Right></Right>
        </InputWrapper>

        <InputWrapper>
            <Left/>
            <Middle>
              {content.length > 500 ? <Error text={"500자 이하로 작성해주세요"} /> : null}
              {errors.content && <Error text={errors.content.message} />}
            </Middle>
            <Right/>
        </InputWrapper>
        
        <InputWrapper style={{marginTop : "14px"}}>
          <Left />
          <Middle>
            <ContentNotice /> 
          </Middle>
          <Right/>
        </InputWrapper>

        <InputWrapper style={{marginTop : "32px", marginBottom : "22px"}}>
          <Left>
            <InputLabel 
              text={"이름"}
            />
          </Left>
          <Middle>
            <InputFormFix content={info} />
          </Middle>
          <Right></Right>
        </InputWrapper>


        <InputWrapper>
          <Left>
            <InputLabel text={"게시글 선택"} isEssential={true} />
          </Left>
          <Middle>
          <Input
              type="text"
              placeholder="어떤 게시글의 후기글인지 게시글을 선택해 주세요"
              style={customInputStyle}
              $customStyles={{
                height: "52px",
                padding: "0 24px",
                display: "flex",
                flexShrink: "0",
                width: "580px",
              }}
              value={selectedPostTitle}
              readOnly={searchParams.get("title")}
            />
          </Middle>
          <Right>
            <Button
                type="button"
                onClick={openModal}
                $customStyles={{
                  background: "var(--main-color)",
                  color: "#f4f4f4",
                  transition: "0.2s",
                  padding: "12px 24px",
                }}
                disabled={searchParams.get("title")}
              >찾아보기</Button>
          </Right>
        </InputWrapper>

        <InputWrapper>
          <Left>
            <InputLabel text={"인증사진 첨부"} />
          </Left>
          <Middle>
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
                height: "52px",
                display: "flex",
                flexShirnk: "0",
              }}
              value={img && img.name}
              readOnly
            />
          </Middle>
          <Right>
            <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onClick();
                }}
                $customStyles={{
                  background: "var(--main-color)",
                  color: "#f4f4f4",
                  transition: "0.2s",
                  padding: "12px 24px",
                  "&:hover": {
                    background: "var(--gray-color)",
                    color: "#fff",
                  },
                }}
              >사진찾기</Button>
          </Right>
        </InputWrapper>

        <InputWrapper>
          <Left></Left>
          <Middle>
          <ImageNotice />
          </Middle>
          <Right></Right>
        </InputWrapper>

      </FormWrapper>
      <Button
        type="submit"
        $customStyles={{
          width: "100%",
          background: "#F4F4F4;",
          color: "#767676",
          marginTop: "108px",
          marginLeft: "16px",
          transition: "0.2s",
          "&:hover": {
            background: "var(--main-color)",
            color: "#fff",
          },
        }}
      >
        작성하기
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onPostSelect={handlePostSelect}
        setPostId={setPostId}
        setSelectedPostTitle={setSelectedPostTitle}
      >
        <Button onClick={closeModal}>확인</Button>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const FormWrapper = styled.div`
  display : flex;
  flex-direction : column;
  gap : 10px;
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
  width: 100%;
  align-items : center; 
  
 `;

const Left = styled.div`
  width : 168px;
  
`

const Middle = styled.div`
  width: 600px;
`

const Right = styled.div`
  width : 168px;
  box-sizing: border-box;
  padding : 0 16px;

`

const TextArea = styled.textarea`
  width: 100%;
  height: 561px;
  box-sizing : border-box;
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

const cstInputStyle = `
  width : 100%;
  height : 54px;
  padding: 12px 24px;
`

export default ReviewForm;
