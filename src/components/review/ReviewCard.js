import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/review/${review.id}`)}>
      <ThumbNail src={review.imageUrl} />
      <Description>
        <Title>{review.title}</Title>
        <Date>{review.createdAt.slice(0, 10)}</Date>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-bottom: 30px;
  transition: 0.3s;
`;

const ThumbNail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
`;

const Description = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-radius: 0 0 6px 6px;
  border: 1px solid #d9d9d9;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const Date = styled.div`
  color: #797979;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

export default ReviewCard;
