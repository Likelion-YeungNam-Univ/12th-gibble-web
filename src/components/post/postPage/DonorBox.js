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

  const [isLoading, setIsLoading] = useState(true);
  const [reportClicked, setReportClicked] = useState(false);
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
        setIsLoading(false);
      } catch (error) {
        navigate("/error");
      }
    };

    fetchDonor();
  }, [navigate, postId]);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <Separator>
        <TitleContainer>
          <Title>기부자들의 따뜻한 손길 감사합니다.</Title>
          {post.isPermitted && (
            <Report onClick={()=> setReportClicked(prev => !prev)}>
              신고하기
              <Notice />
            </Report>
          )}
          {
            reportClicked && <ReportNotice>
              거짓으로 기부 개수를 입력한 사람을 신고하여 주세요. 
            </ReportNotice>
          }

        </TitleContainer>
        
        {post.isPermitted && (
          <WriteReviewButton
            onClick={() =>
              navigate(
                `/review/new?post=${postId}&title=${post.title}&from=true`
              )
            }
          >
            후기 작성하기
          </WriteReviewButton>
        )}
      </Separator>

      <DonorWrapper>
        <DonorContainer>
          {post.donationInfo.map((donor, idx) => {
            return (
              <>
                <DonorCard
                  key={idx}
                  donor={donor}
                  isPermitted={post.isPermitted}
                ></DonorCard>
                {(idx + 1) % 6 !== 0 ? <DonateSep /> : null}
              </>
            );
          })}
        </DonorContainer>
        {!post.isDonationPermitted && !post.isPermitted && (
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
                type="number"
                {...register("donateCount", {
                  required: "기부할 개수를 입력해주세요",
                })}
                style={
                  errors.donateCount && {
                    border: "1px solid var(--main-color)",
                  }
                }
                placeholder="기부한 개수를 입력해주세요."
              />
              <Button $customStyles={ButtonCustomStyles}>기부하기</Button>
            </InputContainer>
          </InputWrapper>
        )}
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
  height : 40px;
  box-sizing : border-box;
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
  cursor: pointer;
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
    border : 1px solid #dbdbdb;
    background-color : #f6f6f6;

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

    &::placeholder {
      color : var(--gray-color);
    }
`;

const ButtonCustomStyles = `
    display: flex;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #111;
    background : #F6F6F6;;
    color : #111;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    letter-spacing: -0.45px;
`;

const DonateSep = styled.div`
  width: 2px;
  height: 54px;
  background: #dbdbdb;
`;

const ReportNotice = styled.div`
  display: inline-flex;
  padding: 10px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #FEF3F4;
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.45px;
`

export default DonorBox;
