import React from 'react'
import { styled } from 'styled-components';

const Separator = () => {
  return (
      <Wrapper>
          <Title>진행 중 이벤트</Title>
          <SearchBar>
              <Input placeholder='검색어를 입력해주세요'></Input>
          </SearchBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border-bottom : 3px solid #cccccc;
    display : flex;
    justify-content: space-between;
    align-items : end;
    box-sizing : border-box;
    padding : 7px 10px;
    margin-bottom : 100px;
`;

const Title = styled.h2`
    font-size : 26px;
    font-weight : 700;
`;

const SearchBar = styled.div`
    background-color : #f6f6f6;
    border-radius : 5px;
    box-sizing : border-box;
    padding : 10px;
`
const Input = styled.input`
    background : none;
    border : none;
    outline : none;
    font-size : 15px;
    font-family : Pretendard;
`;


export default Separator