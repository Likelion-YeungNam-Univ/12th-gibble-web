import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Separator = ({ title, setKey }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SearchContainer
        onSubmit={handleSubmit((data) => {
          setKey(data.key);
          navigate(`/post?page=0&search=${data.key}`);
        })}
      >
        <SearchBar
          style={errors.key && { border: "1px solid var(--main-color)" }}
        >
          <Input
            placeholder="검색어를 입력해주세요"
            {...register("key", {
              required: "검색어를 입력해주세요",
            })}
          />
        </SearchBar>
        <Button $customStyles={`height : 54px`}>검색하기</Button>
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 32px 10px;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;

const SearchContainer = styled.form`
  display: flex;
  gap: 10px;
`;

const SearchBar = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
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
