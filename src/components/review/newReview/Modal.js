import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "@/components/common/Button";

const Modal = ({ isOpen, onClose, onPostSelect, }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (!isOpen) return null;

  const handlePostClick = (postId) => {
    setSelectedPost(prevSelected => prevSelected === postId ? null : postId);
  };

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
          {posts.map((post) => (
            <Post
              key={post.id}
              onClick={() => handlePostClick(post)}
              isSelected={selectedPost && selectedPost.id === post.id}
            >
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content.substring(0, 100)}...</PostContent>
              <PostDate>{post.date}</PostDate>
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
  display:flex;
  align-items: center;
  color: var(--main-color, #F42E3D);
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
  background: ${props => props.isSelected ? '#FEF3F4' : '#F4F4F4'};
  border: ${props => props.isSelected ? '2px solid #F42E3D' : '2px solid transparent'};
  transition: background-color 0.1s ease, border-color 0.1s ease;

  &:hover {
    background-color: #FEF3F4;
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
`;

const PostDate = styled.span`
  font-size: 12px;
  color: #999;
`;

const posts = [
  { 
    id: 1, 
    title: "희귀병 환자 김민수에게 헌혈증이 필요합니다. ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  },
  { 
    id: 2, 
    title: "안 ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  },  
  { 
    id: 3, 
    title: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  }, 
  { 
    id: 4, 
    title: "하세요 ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  },
  { 
    id: 5, 
    title: "희귀병 환자3 김민수에게 헌혈증이 필요합니다. ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  },  
  { 
    id: 6, 
    title: "희귀병 환자 김민수에게 헌혈증이 필요합니다. ", 
    content:"안녕하세요. 저는 홍민수(35세, 남)의 가족입니다. 민수씨는 급성 림프구성 백혈병으로 현재 서울대학교병원에 입원 중입니다. 지속적인 수혈이 필요한 상황이지만, 헌혈증이 부족하여 치료에 어려움을 겪고 있습니다.  현재 민수씨는 항암치료 중이며, 치료에 헌혈증이 절실히 필요합니다. 헌혈증을 기부하시려면, 상단의 메일로 연락 주시고 서울대학교병원 헌혈증 기부 센터로 보내주시면 감사하겠습니다. 여러분의 작은 나눔이 민수씨에게 큰 희망이 됩니다. 진심으로 감사드립니다.  " ,
    date: "2024-07-21"
  }, 
];

export default Modal;