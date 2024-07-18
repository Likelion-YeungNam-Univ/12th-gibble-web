import React from 'react'
import styled from 'styled-components'

const Warning = () => {
  return (
    <Wrapper>혈액관리법 개정에 따라 2022년 09월 24일 이후 최초 발급된 헌혈증서부터 잃어버리거나 훼손 시 재발급 가능합니다.</Wrapper>
  )
}

const Wrapper = styled.div`
    background-color : #f42e3d;
    color: #fff;
    display : flex;
    justify-content : center;
    align-items : center;

    box-sizing : border-box;
    padding : 10px 0;

`

export default Warning