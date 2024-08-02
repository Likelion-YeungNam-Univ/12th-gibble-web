import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import showPost from "@/api/post/showPost";
import Loading from "@/layouts/Loading";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await showPost(postId);
        console.log(postId);
        console.log(result.data);
        setPost(result.data);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };
    if (postId) {
      fetch();
    }
  }, [navigate, postId]);

  if (isLoading || !post) return <Loading />;

  return (
    <>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.address}</div>
    </>
  );
};

export default PostPage;
