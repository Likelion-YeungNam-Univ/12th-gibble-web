import React from 'react'
import { styled } from 'styled-components';

const NewPostSeparator = ({title}) => {
  return (
    <Wrapper>
          <Title>{title}</Title>
          <Notice><span style={{color:"var(--main-color"}}>* </span>은 필수 입력 항목입니다.</Notice>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border-bottom : 3px solid var(--main-color);
    display : flex;
    justify-content: space-between;
    align-items : end;
    box-sizing : border-box;
    padding : 20px 10px;
    margin-bottom : 100px;
`;

const Title = styled.h2`
    font-size : 26px;
    font-weight : 700;
`;

const Notice = styled.div`
    font-size : 18px;
    color : var(--gray-color);
`


export default NewPostSeparator