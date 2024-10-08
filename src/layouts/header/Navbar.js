import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Category
        onClick={() => {
          navigate(`/post`);
          window.location.reload();
        }}
      >
        헌혈증 기부
      </Category>
      <Category
        onClick={() => {
          navigate("/review");
          window.location.reload();
        }}
      >
        투명 후기
      </Category>
      <Category
        onClick={() => {
          navigate("/event");
          window.location.reload();
        }}
      >
        이벤트
      </Category>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 20%;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.div`
  font-size: 20px;
  color: #111;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #f42e3d;
  }
`;


export default Navbar;
