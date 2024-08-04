import React from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import { ReactComponent as Trash } from "@/assets/svg/trash.svg";
import { ReactComponent as Pen } from "@/assets/svg/pen.svg";
import deletePost from "@/api/post/deletePost";

const Content = ({ post }) => {
  const deleteHandler = async () => {
    console.log(post.postId);
    const result = await deletePost(post.postId);

    console.log("삭제 결과", result);
  };

  const modifyHandler = async () => {};

  return (
    <Wrapper>
      <Container>
        <Description>{post.content}</Description>
        {post.wantedCard && post.donatedCard && (
          <>
            <Button
              $customStyles={{
                padding: "14px 24px",
                borderRadius: "6px;",
                border: "1px solid var(--main-color)",
                background: "white",
                color: "var(--main-color)",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "26px" /* 144.444% */,
                letterSpacing: "0.45px",
                cursor: "default",
                marginRight: "16px",
              }}
            >
              필요 헌혈증 개수 : {post.wantedCard}
            </Button>
            <Button
              $customStyles={{
                padding: "14px 24px",
                borderRadius: "6px;",
                border: "1px solid var(--main-color)",
                background: "white",
                color: "var(--main-color)",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "26px" /* 144.444% */,
                letterSpacing: "0.45px",
                marginRight: "17px",
                cursor: "default",
              }}
            >
              수령 주소 : {post.address}
            </Button>
          </>
        )}
        {post.isPermitted && (
          <PostBtnContainer>
            <DeleteBtn onClick={deleteHandler}>
              <PostBtn>글 삭제</PostBtn>
              <TrashIcon />
            </DeleteBtn>
            ㅣ
            <ModifyBtn>
              <PostBtn>글 수정</PostBtn>
            </ModifyBtn>
            <PenIcon />
          </PostBtnContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  border-bottom: 2px solid #dbdbdb;
  margin-bottom: 68px;
`;

const Container = styled.div`
  margin-top: 110px;
  margin-bottom: 80px;
  padding-left: 50px;
`;

const Description = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 145.455% */
  letter-spacing: -0.55px;
  margin-bottom: 25px;
  padding-right: 100px;
`;

const PostBtnContainer = styled.div`
  color: "#dbdbdb";
  margin-top: 70px;
  display: flex;
  justify-content: end;
  gap: 12px;
  align-items: center;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const PostBtn = styled.div``;

const DeleteBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

const ModifyBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

const PenIcon = styled(Pen)`
  width: 24px;
  height: 24px;
`;

const TrashIcon = styled(Trash)`
  width: 24px;
  height: 24px;
`;
