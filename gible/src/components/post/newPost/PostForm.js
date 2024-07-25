import React, { useState } from 'react'
import styled from 'styled-components'
import InputForm from './InputForm'
import TextAreaForm from './TextAreaForm'
import InputFormFix from './InputFormFix'
import { TitleNotice, ContentNotice } from './FormNotice'

const PostForm = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [required, setRequired] = useState(""); // parseInt 필요
    const [location, setLocation] = useState("");
  return (
      <Wrapper>
          <TextCount>{title.length}/30</TextCount>
          <InputForm text={'제목'} isEssential={true} condition={'(30자 이하)'} content={title} setter={setTitle} maxLength={30} />
          <TitleNotice/>
          
          <TextCount>{content.length}/500</TextCount>
          <TextAreaForm text={'내용'} isEssential={true} content={content} condition={'(500자 이하)'} setter={setContent} maxLength={500}></TextAreaForm>
          <ContentNotice/>

          <InputFormFix text={'이름'} content={'홍길동'} />
          <InputFormFix text={'전화번호'} content={'010-1234-5678'} />
          
          <InputForm text={'필요 개수'} isEssential={true} content={required} setter={setRequired} />
          <InputForm text={'헌혈증 수령 주소'} isEssential={true} content={location} setter={setLocation} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom : 30px;
`

const TextCount = styled.div`
    text-align : end;
    font-size : 14px;
    margin-bottom : 15px;
    margin-top : 30px;
`

export default PostForm