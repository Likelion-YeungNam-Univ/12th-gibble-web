import React from "react";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import showPostList from "@/api/post/showPostList";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const page = searchParams.get("page") || 0;
      console.log(page);
      const size = 10;
      try {
        const result = await showPostList({ page, size });

        console.log(result.data.content);
        setPostList(result.data.content);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetch();
  }, [navigate, searchParams, setPostList]);

  return (
    <>
      {postList.map((el, index) => {
        return <PostCard post={el} index={index + 1} />;
      })}
    </>
  );
};


export default PostList;
