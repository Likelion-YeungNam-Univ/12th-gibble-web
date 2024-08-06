import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const NoticeCard = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/post/notice`);
  };

  return (
    <Wrapper>
      <PostContent width={"5%"}>-</PostContent>
      <PostContent
        width={"55%"}
        align={"start"}
        left={"10px"}
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
        $customStyles={{
          color: "#111",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "600",
          letterSpacing: "-0.45px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        [공지] 글 작성 시 유의사항
      </PostContent>

      <PostContent width={"10%"}>관리자</PostContent>
      <PostContent width={"15%"}>2024-08-04</PostContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 16px 0;
  background: #fef3f4;
`;

const PostContent = styled.div`
  width: ${(props) => props.width};
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-size: 18px;
  color: var(--gray-color);
  box-sizing: border-box;
  padding-left: ${(props) => props.left};
  ${(props) =>
    props.$customStyles &&
    css`
      ${props.$customStyles}
    `}
`;

export default NoticeCard;
