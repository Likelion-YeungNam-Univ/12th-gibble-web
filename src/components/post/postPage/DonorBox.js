import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Notice } from "@/assets/svg/notice.svg";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import DonorCard from "./DonorCard";
import { useNavigate, useParams } from "react-router-dom";
import getDonators from "@/api/post/getDonators";
import Loading from "@/layouts/Loading";
import { useForm } from "react-hook-form";
import donatePost from "@/api/post/donatePost";

const DonorBox = ({ post }) => {
  const { postId } = useParams();
  const [donorList, setDonorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    console.log("실행");
    const fetchDonor = async () => {
      try {
        const result = await getDonators(postId);
        console.log("after getDonators", result.data);
        setDonorList(result.data);
        setIsLoading(false);
      } catch (error) {
        navigate("/error");
      }
    };

    fetchDonor();
  }, [setDonorList, navigate, postId]);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <Separator>
        <TitleContainer>
          <Title>기부자들의 따뜻한 손길 감사합니다.</Title>
          {post.isPermitted && (
            <Report>
              신고하기
              <Notice />
            </Report>
          )}
        </TitleContainer>
        <WriteReviewButton>후기 작성하기</WriteReviewButton>
      </Separator>

      <DonorWrapper>
        <DonorContainer>
          {/* 도너 리스트 받아와서 map할 때 2번쨰 인자 인덱스로 donorList.length-1 !=== index
                    일떄만 카드 옆에 구분선 표시되도록 하면 됩니다~
                */}

          {donorList.map((donor, idx) => {
            return (
              <>
                <DonorCard key={idx} donor={donor}></DonorCard>
                {(idx + 1) % 6 !== 0 ? <DonateSep /> : null}
              </>
            );
          })}
        </DonorContainer>
        <InputWrapper>
          <InputContainer
            onSubmit={handleSubmit((data) => {
              const donate = async () => {
                const result = await donatePost({
                  postId,
                  donateCount: parseInt(data.donateCount),
                });
                if (result.statusCode === 200) {
                  window.location.reload();
                }
                if (result.statusCode === 400) {
                  alert(result.message);
                }
              };
              donate();
            })}
          >
            <Input
              $customStyles={InputCustomStyle}
              {...register("donateCount", {
                required: "기부할 개수를 입력해주세요",
              })}
              style={
                errors.donateCount && { border: "1px solid var(--main-color)" }
              }
            />
            <Button $customStyles={ButtonCustomStyles}>등록하기</Button>
          </InputContainer>
        </InputWrapper>
      </DonorWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Separator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
`;

const Report = styled.div`
  display: flex;
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.45px;
  text-decoration-line: underline;
`;

const WriteReviewButton = styled.div`
  color: var(--main-color, #f42e3d);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.45px;
`;

const DonorWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 30px 53px;
`;

const DonorContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const InputContainer = styled.form`
  display: flex;
  gap: 12px;
`;

const InputCustomStyle = `
    display: flex;
    width: 235px;
    height : 58px;

    align-items: center;
    gap: 10px;
    color: #767676;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--18, 26px); /* 144.444% */
    letter-spacing: -0.45px;
`;

const ButtonCustomStyles = `
    display: flex;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #111;
    background : none;
    color : #111;
`;

const DonateSep = styled.div`
  width: 2px;
  height: 54px;
  background: #dbdbdb;
`;

export default DonorBox;
