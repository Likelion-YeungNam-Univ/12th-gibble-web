import React from "react";
import styled from "styled-components";
import DonationBar from "./DonationBar";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, index }) => {
  console.log("post", post);
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
      >
        {post.title}
      </PostContent>
      <PostContent width={"10%"}>{post.writer}</PostContent>
      <PostContent width={"15%"}>{post.createdAt.slice(0, 10)}</PostContent>
      <PostContent width={"15%"}>
        <DonationBar wanted={post.wantedCard} donated={post.donatedCard} />
      </PostContent>
    </Wrapper>
  );
};
  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 13px 0;
`;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 13px 0;
`;
const PostContent = styled.div`
  width: ${(props) => props.width};
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-size: 18px;
  color: var(--gray-color);
  box-sizing: border-box;
  padding-left: ${(props) => props.left};
`;
export default PostCard;

  width: ${(props) => props.width};
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-size: 18px;
  color: var(--gray-color);
  box-sizing: border-box;
  padding-left: ${(props) => props.left};
`;
export default PostCard;
