import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import getMyPosts from "@/api/mypage/getMyPosts";
import { useNavigate } from "react-router-dom";

const Modal = ({
  isOpen,
  onClose,
  onPostSelect,
  setPostId,
  setSelectedPostTitle,
}) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [myPostList, setMyPostList] = useState([]);
  const navigate = useNavigate();

  const handlePostClick = (event) => {
    console.log("event.postid", event.postId);
    setPostId(event.postId);
    setSelectedPostTitle(event.title);
    setSelectedPost(event.postId);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getMyPosts();
        setMyPostList(result.data);
        console.log("typeof", typeof result.data[0].createdAt);
      } catch (error) {
        alert("작성한 게시글이 없습니다.");
        navigate("/review");
      }
    };
    fetchPost();
  }, []);

  if (!isOpen) return null; // 에러 유의

  const handleConfirm = () => {
    if (selectedPost) {
      onPostSelect(selectedPost.title);
    }
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>내가 작성한 게시글</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
        <PostList>
          {myPostList.map((post) => (
            <Post
              key={post.id}
              onClick={() => handlePostClick(post)}
              isSelected={selectedPost === post.postId}
            >
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent> {/* 체크 */}
              <PostDate>{post.createdAt.substring(0, 10)}</PostDate>
            </Post>
          ))}
        </PostList>
        <Position>
          <Button onClick={handleConfirm}>확인</Button>
        </Position>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 624px;
  height: 725px;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Title = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  color: var(--main-color, #f42e3d);
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.65px;
  margin-left: 40px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  margin: 20px;
`;

const PostList = styled.div`
  max-height: 520px;
  height: 520px;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.div`
  width: 502px;
  height: auto;
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 6px;
  background: ${(props) => (props.isSelected ? "#FEF3F4" : "#F4F4F4")};
  border: ${(props) =>
    props.isSelected ? "2px solid #F42E3D" : "2px solid transparent"};
  transition: background-color 0.1s ease, border-color 0.1s ease;

  &:hover {
    background-color: #fef3f4;
  }
`;

const Position = styled.div`
  width: 624px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  overflow: hidden;
  display: blox;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PostDate = styled.span`
  font-size: 12px;
  color: #999;
`;

export default Modal;
