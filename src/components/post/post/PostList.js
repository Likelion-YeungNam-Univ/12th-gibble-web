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
import searchPost from "@/api/post/searchPost";
import Loading from "@/layouts/Loading";

const PostList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [key, setKey] = useState();
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      console.log("원래 useEffect", isSearched);
      setNowPage(parseInt(searchParams.get("page")) || 0);

      try {
        const result = await showPostList({ nowPage });

        console.log(result);
        setPostList(result.data.content);
        setTotalPages(result.totalPages);
        setTotalElements(result.totalElements);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    if (!isSearched) {
      fetch();
    }
  }, [nowPage, setNowPage, navigate, searchParams]);

  useEffect(() => {
    const fetch = async () => {
      setIsSearched(true);
      if (isSearched) {
        const result = await searchPost(
          parseInt(searchParams.get("page")),
          "",
          key
        );
        setNowPage(parseInt(searchParams.get("page")) || 0);
        setPostList(result.data.content);
        setTotalElements(result.data.totalElements);
        setTotalPages(result.data.totalPages);
        navigate(`/post?page=${nowPage}&search=${key}`);
      }
    };
    fetch();
  }, [key, nowPage, navigate]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Separator title={"헌혈증 기부"} setKey={setKey}></Separator>
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
