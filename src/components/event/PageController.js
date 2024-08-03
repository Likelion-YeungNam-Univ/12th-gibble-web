import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftMove } from "@/assets/svg/left-move.svg";
import { ReactComponent as RightMove } from "@/assets/svg/right-move.svg";
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
      <LeftButton onClick={() => handleLeftClick()} />
      <Page>{nowPage + 1}</Page>
      <RightButton onClick={() => handleRightClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 45%;
`;

const Page = styled.div`
  width: 50px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftButton = styled(LeftMove)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const RightButton = styled(RightMove)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default PageController;
