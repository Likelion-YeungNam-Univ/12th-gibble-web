import React from "react";
import styled from "styled-components";
import Title from "@/components/post/postPage/Title";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import postBanner from "@/assets/image/postBanner.png"

const NoticePage = () => {
  const notice = {
    title: "[공지]글 작성 시 유의사항",
    writer: "관리자",
    createdAt: "2024-08-04-",
  };
  return (
    <Wrapper>
      <PageNoticeWithBanner location={['Home','헌혈증 기부','게시글','상세보기']} banner={postBanner}/>
      <Container>
        <Title post={notice} />
        <ContentWrapper>
          <ContentContainer>
            <Description>
              안녕하십니까, 기블을 이용해주시는 고객 여러분.
              <br/>
              기블의 서비스 관리자입니다.
              <br/><br/>
              우리는 헌혈증이 급히 필요한 이용자들에게 투명하고, 더욱 빠른 방식으로 헌혈증이 기부되는 것을 목표로 하고 하고 있습니다.
              <br/>
              헌혈증의 필요 갯수와 목적을 정확하게 기입하여 주시기 바라겠습니다.
              <br/>
              <br/>
              더 나은 서비스를 제공하기 위해 항상 노력하겠습니다.
              <br/>
              감사합니다.


            </Description>
          </ContentContainer>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default NoticePage;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Container = styled.div`
  padding: 0px 342px;
`;

const ContentWrapper = styled.div`
  margin-bottom: 68px;
`
const ContentContainer = styled.div`
  margin-top: 110px;
  padding-bottom : 70px;
  margin-bottom: 80px;
  padding-left: 50px;
  border-bottom : 2px solid #dbdbdb;
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