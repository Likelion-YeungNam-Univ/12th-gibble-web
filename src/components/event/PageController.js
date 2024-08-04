import React from "react";
import styled from "styled-components";
import { ReactComponent as Left } from "@/assets/svg/left-move.svg";
import { ReactComponent as Right } from "@/assets/svg/right-move.svg";
import { useNavigate } from "react-router-dom";

const PageController = ({ nowPage, setNowPage, totalPages, region }) => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (nowPage > 0) {
      setNowPage((prev) => prev - 1);
      navigate(`/event?page=${nowPage - 1}&region=${region}`);
    }
  };

  const handleRightClick = () => {
    if (nowPage < totalPages - 1) {
      setNowPage((prev) => prev + 1);
      navigate(`/event?page=${nowPage + 1}&region=${region}`);
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
              navigate(`/event?page=${nowPage - 2}&region=${region}`);
            }}
          >
            {nowPage - 1}
          </PageNum>
        )}
        {nowPage > 0 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev - 1);
              navigate(`/event?page=${nowPage - 1}&region=${region}`);
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
              navigate(`/event?page=${nowPage + 1}&region=${region}`);
            }}
          >
            {nowPage + 2}
          </PageNum>
        )}
        {totalPages > nowPage + 2 && (
          <PageNum
            onClick={() => {
              setNowPage((prev) => prev + 2);
              navigate(`/event?page=${nowPage + 2}&region=${region}`);
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
  width: 100%;
  display: flex;
  justify-content: center;
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
  color: #767676;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    border-bottom: 1px solid var(--main-color);
    font-weight: bold;
  }
`;

export default PageController;
