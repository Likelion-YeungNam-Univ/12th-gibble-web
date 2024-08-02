import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import logoutHandler from "@/api/login/logoutHandler";
import logo from "@/assets/image/main-logo.png"
import { useDispatch, useSelector } from "react-redux";

const HeadComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <Wrapper>
      <Container>
        <Logo src={logo} onClick={() => navigate("/")} />
        <Util>
          {!accessToken ? (
            <Text onClick={() => navigate("/login")}>로그인</Text>
          ) : (
            <Text onClick={() => logoutHandler(dispatch)}>로그아웃</Text>
          )}

          <SearchBox />
        </Util>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 250px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items : center;
`;

const Logo = styled.img`
  width : 120px;
  height : 32px;
  float : left;
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

  &:hover {
    color: #111;
    font-weight: bold;
  }
`;

export default HeadComponent;
