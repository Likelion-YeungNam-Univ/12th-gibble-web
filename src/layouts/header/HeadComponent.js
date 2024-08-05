import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import logoutHandler from "@/api/login/logoutHandler";
import logo from "@/assets/image/main-logo.png";
import { useDispatch, useSelector } from "react-redux";

const HeadComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const logoutResponseHandler = async () => {
    const result = await logoutHandler(dispatch);
    if (result.statusCode === 200) navigate("/");
  };
  return (
    <Wrapper>
      <Container>
        <Logo
          src={logo}
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        />
        <Util>
          {!accessToken ? (
            <Utils>
              <Text onClick={() => navigate("/login")}>로그인</Text>
            </Utils>
          ) : (
            <Utils>
              <Text onClick={logoutResponseHandler}>로그아웃</Text> |
              <Text onClick={() => navigate("/mypage")}>마이페이지</Text>
            </Utils>
          )}

          <SearchBox />
        </Util>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 28px 252px;
`;

const Utils = styled.div`
  display: flex;
  gap: 5px;
  color: #dbdbdb;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 32px;
  float: left;
  cursor: pointer;
`;

const Util = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Text = styled.div`
  color: #767676;
  font-size: 16px;
  cursor: pointer;
  margin: 0px 5px;

  &:hover {
    color: #111;
  }
`;

export default HeadComponent;
