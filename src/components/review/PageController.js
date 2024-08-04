import React from "react";
import { ReactComponent as Left } from "@/assets/svg/left-move.svg";
import { ReactComponent as Right } from "@/assets/svg/right-move.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageController = ({ nowPage, setNowPage, totalPages }) => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (nowPage > 0) {
      setNowPage((prev) => prev - 1);
      navigate(`/review?page=${nowPage - 1}`);
    }
  };

  const handleRightClick = () => {
    if (nowPage < totalPages - 1) {
      setNowPage((prev) => prev + 1);
      navigate(`/review?page=${nowPage + 1}`);
    }
  };

  return (
    <Wrapper>
      <LeftBtn onClick={() => handleLeftClick()} />
      <PageNumList>
        {nowPage > 1 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev - 2);
              navigate(`/review?page=${nowPage - 2}`);
            }}
          >
            {nowPage - 1}
          </PageNum>
        )}
        {nowPage > 0 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev - 1);
              navigate(`/review?page=${nowPage - 1}`);
            }}
          >
            {nowPage}
          </PageNum>
        )}
        <PageNum style={{ color: "red", borderBottom: "1px solid red" }}>
          {nowPage + 1}
        </PageNum>
        {totalPages > nowPage + 1 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev + 1);
              console.log(nowPage);
              navigate(`/review?page=${nowPage + 1}`);
            }}
          >
            {nowPage + 2}
          </PageNum>
        )}
        {totalPages > nowPage + 2 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev + 2);
              navigate(`/review?page=${nowPage + 2}`);
            }}
          >
            {nowPage + 3}
          </PageNum>
        )}
      </PageNumList>
      <RightBtn onClick={() => handleRightClick()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LeftBtn = styled(Left)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const RightBtn = styled(Right)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PageNumList = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-around;
`;

const PageNum = styled.div`
  font-size: 18px;
  width: 20px;
  text-align: center;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    border-bottom: 1px solid var(--main-color);
    font-weight: bold;
  }
`;

export default PageController;
