import React from 'react'
import styled from 'styled-components'
import PageNotice from '@/components/common/PageNotice';
import PostForm from '@/components/post/newPost/PostForm';
import Button from '@/components/common/Button';
import NewPostSeparator from '../../components/post/newPost/NewPostSeparator';

const NewPost = () => {
    const location = {first: 'Home', second: '커뮤니티', third : '게시글 작성'}
  return (
      <Wrapper>
          <PageNotice location={location} />
          <Content>
              <ContentNotice>게시글 작성</ContentNotice>
              <NewPostSeparator title={'헌혈증 기부 요청 글 작성하기'} />
              <Form>
                  <PostForm/>
              </Form>
          </Content>
          <Button text={'작성완료'} onClick={() => console.log('click')} customStyles={ButtonStyle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 100%;
    min-height : 100%;
    padding : 10px;
`

const Content = styled.div`
    box-sizing : border-box;
    padding : 0 14%;
`

const ContentNotice = styled.div`
    font-size : 18px;
    padding : 0 10px;
    color : var(--gray-color);
`

const Form = styled.div`
    box-sizing : border-box;
    padding : 0 10%;
`

const ButtonStyle = `
    width : 70%;
    margin-left : 15%;
    margin-top : 67px;
    margin-bottom : 150px;
    background-color: #f4f4f4;
    transition: 0.3s;
    color: var(--gray-color);
    font-weight: 700;
    &:hover{
        background-color: var(--main-color);
        color : #fff;
    }
    
`

export default NewPost