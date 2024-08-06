import React from "react";
import styled, { css } from "styled-components";
import DonationBar from "./DonationBar";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, index }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/post/${post.postId}`);
  };

  return (
    <Wrapper>
      <PostContent width={"5%"}>{index}</PostContent>
      <PostContent
        width={"55%"}
        align={"start"}
        left={"10px"}
        onClick={clickHandler}
        style={{ cursor: "pointer",
          color: "black",
         }}
        $customStyles={`&:hover{text-decoration : underline;}`}
      >
        {post.title}
        {post.isNew && (
          <span
            style={{
              color: "var(--main-color)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              letterSpacing: "-0.4px",
              marginLeft: "10px",
            }}
          >
            New
          </span>
        )}
      </PostContent>

      <PostContent width={"10%"}>{post.writer}</PostContent>
      <PostContent width={"15%"}>{post.createdAt.slice(0, 10)}</PostContent>
      <PostContent width={"15%"}>
        <DonationBar wanted={post.wantedCard} donated={post.donatedCard} />
      </PostContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 13px 0;
  text-align: center;
  justify-content: center;
  align-items: center;

`;

const PostContent = styled.div`
  width: ${(props) => props.width};
  text-align: center;
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
    margin : 2.7px 0px ;
`;

export default PostCard;
