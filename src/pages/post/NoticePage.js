import React from "react";
import styled from "styled-components";
import Title from "@/components/post/postPage/Title";
import PageNoticeWithBanner from "@/components/common/PageNoticeWithBanner";
import postBanner from "@/assets/image/postBanner.png"

const NoticePage = () => {
  const notice = {
    title: "[공지] 글 작성 시 유의사항",
    writer: "관리자",
    email: "gibble@gmail.com",
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
              안녕하세요.
              <br/>
              기블을 사랑해주시는 고객 여러분.
              <br/>
              저희는 개인 간 헌혈증 기부 플랫폼으로, 투명하고 빠른 방식으로 헌혈증이 기부됨을 목표로 하고 있습니다.
              <br/>
              <br/>
              플랫폼의 원활한 운영을 위하여 고객 여러분께서는 
              <br/>
              헌혈증 기부 요청글 작성 및 기부 전 다음과 같은 사항을 유의하여 주시길 바랍니다.
              <br/><br/><br/><br/>
              <span style={{fontWeight : "bold", color:"#111"}}>1. 투명성</span>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              기부된 모든 헌혈증은 투명하게 관리되며, 사용 내역이 명확히 공개하여야 합니다.
              <br/>
              <br/>
              <span style={{fontWeight : "bold", color:"#111"}}>2. 필요 개수</span>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              헌혈증 수령자께서는 필요한 만큼의 헌혈증 개수만 기입할 것을 약속하며, <br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;
              추후 남은 헌혈증에 대한 조치도 적어주시길 바랍니다.
              <br/>
              <br/>
              <span style={{fontWeight : "bold", color:"#111"}}>3. 후기 작성</span>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              기부해 주신 분들은 사용 후기를 꼭 작성해 주셔야합니다.<br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;
              후기는 헌혈증이 올바르게 사용되었음을 확인하는 중요한 자료와 원활한 플랫폼 운영에 큰 힘이 됩니다.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              미작성 시 불이익이 있을 수 있습니다.
              <br/>
              <br/>
              <br/>
              <br/>
              여러분의 따뜻한 마음에 감사드리며, <br/>
              더 나은 서비스를 제공과 건강한 헌혈증 기부 문화 정착을 위해 항상 노력하겠습니다.
              <br/>
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
  line-height: 45px; /* 145.455% */
  letter-spacing: -0.55px;
  margin-bottom: 25px;
  padding-right: 100px;
  color : var(--gray-color);
`;