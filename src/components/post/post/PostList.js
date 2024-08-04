import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import showPostList from "@/api/post/showPostList";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageController from "./PageController";
import { ReactComponent as WriteButton } from "@/assets/svg/post-write-button.svg";
import NoticeCard from "./NoticeCard";
import Separator from "@/components/common/Separator";
import PostCategory from "./PostCategory";

const PostList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [searchPost, setSearchPost] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setNowPage(parseInt(searchParams.get("page")) || 0);

      const size = 10;
      try {
        const result = await showPostList({ nowPage, size });

        console.log(result);
        setPostList(result.data.content);
        setTotalPages(result.totalPages);
        setTotalElements(result.totalElements);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetch();
  }, [nowPage, setNowPage, navigate, searchParams]);

  useEffect(() => {
    setPostList(searchPost);
  }, [searchPost]);

  return (
    <>
      <Separator
        title={"헌혈증 기부"}
        setSearchPost={setSearchPost}
      ></Separator>
      <PostCategory />
      <NoticeCard />
      {postList.map((el, index) => {
        return (
          <PostCard post={el} index={totalElements - 10 * nowPage - index} />
        );
      })}
      <ButtonContainer>
        <PageController
          nowPage={nowPage}
          setNowPage={setNowPage}
          totalPages={totalPages}
        />
        <WriteButtonContainer>
          <WriteBtn onClick={() => navigate("/post/new")} />
        </WriteButtonContainer>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;
`;

const WriteBtn = styled(WriteButton)`
  cursor: pointer;
`;

const WriteButtonContainer = styled.div`
  position: fixed;
  top: 600px;
  left: 1600px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PostList;
