import React from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import { ReactComponent as Trash } from "@/assets/svg/trash.svg";
import { ReactComponent as Pen } from "@/assets/svg/pen.svg";
import deletePost from "@/api/post/deletePost";
import { useNavigate, useParams } from "react-router-dom";
import DonorBox from "./DonorBox";

const Content = ({ post }) => {
  const navigate = useNavigate();
  const formatText = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  const { postId } = useParams();

  const deleteHandler = async () => {
    try {
      const result = await deletePost(postId);

      if (result.statusCode === 200) {
        navigate("/post/");
        alert("정상적으로 삭제되었습니다.");
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const modifyHandler = () => {
    navigate(`/post/modify/${postId}`);
  };

  return (
    <Wrapper>
      <Container>
        <Description>{formatText(post.content)}</Description>
        {post.wantedCard !== undefined && post.donatedCard !== undefined && (
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
            <ModifyBtn onClick={modifyHandler}>
              <PostBtn>글 수정</PostBtn>
              <PenIcon />
            </ModifyBtn>
          </PostBtnContainer>
        )}
      </Container>
      <DonorBox post={post} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  margin-bottom: 68px;
`;

const Container = styled.div`
  margin-top: 66px;
  padding: 0 50px;
  padding-bottom: 70px;
  margin-bottom: 80px;
  border-bottom: 2px solid #dbdbdb;
`;

const Description = styled.div`
  color: #111;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 145.455% */
  letter-spacing: -0.55px;
  margin-bottom: 70px;
  padding : 0 40px;
  word-break : break-all;
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
  line-height: var(—18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const PostBtn = styled.div``;

const DeleteBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items : center;
`;

const ModifyBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items  : center;
`;

const PenIcon = styled(Pen)`
  width: 24px;
  height: 24px;
`;

const TrashIcon = styled(Trash)`
  width: 24px;
  height: 24px;
`;
