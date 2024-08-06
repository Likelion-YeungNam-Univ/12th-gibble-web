import deleteReview from "@/api/review/deleteReview";
import getReview from "@/api/review/getReview";
import ReviewInfo from "@/components/review/reviewPage/ReviewInfo";
import Loading from "@/layouts/Loading";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "@/assets/svg/delete.svg";
import GoToMyPost from "@/components/review/reviewPage/GoToMyPost";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import reviewBanner from "@/assets/image/review-banner.png";
import showPost from "@/api/post/showPost";
import DonorBox from "@/components/post/postPage/DonorBox";
import DonorCard from "@/components/post/postPage/DonorCard";

const ReviewPage = () => {
  const { reviewId } = useParams();
  const [review, setReview] = useState();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const result = await getReview(reviewId);
        console.log(result);
        setReview(result.data);
      } catch (error) {
        console.error(error);
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };

    if (reviewId) {
      fetchReview();
    }
  }, [reviewId, navigate]);

  useEffect(() => {
    const fetchPost = async () => {
      if (review) {
        try {
          const result = await showPost(review.postId);
          console.log("게시글 불러오기", result);
          setPost(result.data);
        } catch (error) {
          console.error(error);
          navigate("/error");
        }
      }
    };

    fetchPost();
  }, [review, navigate]);

  const deleteHandler = async () => {
    try {
      const result = await deleteReview(reviewId);

      if (result.statusCode === 200) {
        navigate("/review");
      } else {
        navigate("/error");
      }
    } catch (error) {
      navigate("/error");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <PageNoticeWithBanner
        location={["Home", "투명후기", "상세 페이지"]}
        banner={reviewBanner}
      />

      <Wrapper>
        <PageTitle>투명 후기</PageTitle>
        <Title>{review.title}</Title>
        <ReviewInfo
          info={{
            writer: review.nickname,
            email: review.email,
            createdAt: review.createdAt,
          }}
        />
        <Description>
          <GoToMyPostContainer>
            <GoToMyPost
              name={review.nickname}
              post={review.postId}
              title={review.title}
            />
          </GoToMyPostContainer>
          {review.content}

          <Image src={review.imageUrl}></Image>

          {review.isPermitted && (
            <DeleteContainer onClick={deleteHandler}>
              <DeleteText>글 삭제</DeleteText>
              <DeleteIcon />
            </DeleteContainer>
          )}
        </Description>
        <DonateText>기부자들의 따뜻한 손길 감사합니다.</DonateText>
        {/* 이미지가 null이 아니면 이미지 보여주기 */}
        {post && (
          <DonorContainer>
            {post.donationInfo.map((donor, idx) => {
              return (
                <>
                  <DonorCard
                    key={idx}
                    donor={donor}
                    isPermitted={post.isPermitted}
                  />
                  {(idx + 1) % 6 !== 0 ? <DonateSep /> : null}
                </>
              );
            })}
          </DonorContainer>
        )}
      </Wrapper>
    </div>
  );
};

const DeleteContainer = styled.div`
  align-self: flex-end;
  box-sizing: border-box;
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`;

const DonateSep = styled.div`
  width: 2px;
  height: 54px;
  background: #dbdbdb;
`;

const DeleteText = styled.div`
  color: #767676;
  text-align: right;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-bottom: 58px;
`;

const Wrapper = styled.div`
  width: 1238px;
  box-sizing: border-box;
  padding: 80px 0;
  margin: 0 auto;
`;

const PageTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--main-color);
`;

const Title = styled.div`
  font-size: 20px;
  box-sizing: border-box;
  padding: 30px 46px;
`;

const Description = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 145.455% */
  letter-spacing: -0.55px;
  box-sizing: border-box;
  padding: 46px 0px 0px 46px;
  border-bottom: 1px solid var(--gray-color);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-top: 30px;
  scale: 0.8;
  width: 100%;
`;

const GoToMyPostContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
`;

const DonateText = styled.div`
  margin-top: 68px;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  margin-bottom: 28px;
`;

const DonorContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  border-radius: 12px;
  border: 1px solid #dbdbdb;
  background: #fff9f9;
  padding: 30px 53px;
`;

export default ReviewPage;
