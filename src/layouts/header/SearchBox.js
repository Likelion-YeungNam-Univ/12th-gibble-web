import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "@/assets/svg/search.svg";
import { useForm } from "react-hook-form";
import searchPost from "@/api/post/searchPost";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [key, setKey] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      console.log("searched 초기값", isSearched);
      if (isSearched) {
        const result = await searchPost(0, "", key);
        navigate(`/post?page=0&search=${key}`);
      }
    };
    fetch();
  }, [navigate, isSearched]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  return (
    <Wrapper
      onSubmit={handleSubmit((data) => {
        setKey(data.key);
        setIsSearched(true);
      })}
      style={errors.key && { border: "1px solid var(--main-color)" }}
    >
      <Input
        placeholder="찾고싶은 게시글을 입력해주세요"
        {...register("key", {
          required: "검색어를 입력해주세요",
        })}
      ></Input>
      <Button type="submit">
        <Search />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #f6f6f6;
  border-radius: 5px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  font-size: 15px;
  font-family: Pretendard;
  width: 80%;
`;

const Button = styled.button`
  border: none;
  background-color: #f6f6f6;
  cursor: pointer;
`;

export default SearchBox;
