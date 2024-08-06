import React from "react";
import { ReactComponent as Left } from "@/assets/svg/left-move.svg";
import { ReactComponent as Right } from "@/assets/svg/right-move.svg";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";

const PageController = ({ nowPage, setNowPage, totalPages }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(0, nowPage - 2);
      const endPage = Math.min(totalPages - 1, startPage + 4);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      while (pageNumbers.length < 5) {
        if (pageNumbers[0] > 0) {
          pageNumbers.unshift(pageNumbers[0] - 1);
        } else {
          pageNumbers.push(pageNumbers[pageNumbers.length - 1] + 1);
        }
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Wrapper>
      {/* <LeftBtn onClick={handleLeftClick} /> */}
      <MoveButton onClick={handleLeftClick} > &lt;</MoveButton>
      <PageNumList>
        {pageNumbers.map((pageNum) => (
          <PageNum
            key={pageNum}
            onClick={() => {
              setNowPage(pageNum);
              navigate(
                `/review?page=${pageNum}&search=${searchParams.get("search")}`
              );
            }}
            style={
              pageNum === nowPage
                ? { color: "red", borderBottom: "1px solid red" }
                : {}
            }
          >
            {pageNum + 1}
          </PageNum>
        ))}
      </PageNumList>
      <MoveButton onClick={handleRightClick} >&gt;</MoveButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;


const MoveButton = styled.div`
  color: #767676;
  width : 30px;
  height : 30px;
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--24, 34px); /* 130.769% */
  letter-spacing: -0.65px;
  border-radius: 50%;
  padding : 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  transition : 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PageNumList = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-around;
  align-items : center;
`;

const PageNum = styled.div`
  font-size: 18px;
  width: 20px;
  text-align: center;
  color: #767676;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    border-bottom: 1px solid var(--main-color);
    font-weight: bold;
  }
`;

export default PageController;
