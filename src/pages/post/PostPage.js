import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import showPost from "@/api/post/showPost";
import Loading from "@/layouts/Loading";
import styled from "styled-components";
import Title from "@/components/post/postPage/Title";
import Content from "@/components/post/postPage/Content";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import postBanner from "@/assets/image/postBanner.png"

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <PageNoticeWithBanner location={['Home','헌혈증 기부','게시글','상세보기']} banner={postBanner}/>
      <Container>
        <Title post={post} />
        <Content post={post} />
      </Container>
    </Wrapper>
  );
};

export default PostPage;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Container = styled.div`
  padding: 0px 342px;
`;
