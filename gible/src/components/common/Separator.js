import React from "react";
import { styled } from "styled-components";
import Button from "./Button";

const Separator = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SearchContainer>
        <SearchBar>
          <Input placeholder="검색어를 입력해주세요"></Input>
        </SearchBar>
        <Button
          text={"검색하기"}
          onClick={() => console.log("clicked")}
          customStyles={`height : 54px`}
        />
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  display: flex;
  justify-content: space-between;
  align-items: end;
  box-sizing: border-box;
  padding: 32px 10px;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const SearchBar = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 320px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  background: none;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: Pretendard;
`;

export default Separator;
