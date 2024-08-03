import React from "react";
import { styled } from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";

const Separator = () => {
  return (
    <Wrapper>
      <Title>진행 중 이벤트</Title>
      <SearchBar>
        <Input
          placeholder="검색어를 입력해주세요"
          $customStyles={{
            background: "#f6f6f6",
            height: "54px",
            marginRight: "8px",
          }}
        />

        <Button>검색하기</Button>
      </SearchBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  display: flex;
  justify-content: space-between;
  align-items: end;
  box-sizing: border-box;
  padding-bottom: 42px;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;

const SearchBar = styled.div`
  display: flex;
`;

export default Separator;
