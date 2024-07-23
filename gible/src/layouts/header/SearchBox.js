import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Search} from '@/assets/svg/search.svg'

const SearchBox = () => {
  return (
      <Wrapper>
          <Input placeholder='검색어를 입력해주세요'></Input>
          <Search/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 230px;
    height : 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    box-sizing: border-box;
    padding: 10px 20px;
    background-color : #f6f6f6;
    border-radius : 5px;
    cursor: pointer;
`
const Input = styled.input`
    outline : none;
    border: none;
    background : none;
    font-size : 15px;
    font-family : Pretendard;
    width : 80%;

`;

export default SearchBox