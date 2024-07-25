import React from 'react'
import styled from 'styled-components'
import DonationBar from './DonationBar'

const PostCard = ({ post }) => {
    console.log('post',post)
    return (
      <Wrapper>
          <PostContent width={'5%'}>{post.index}</PostContent>
          <PostContent width={'55%'} align={'start'} left={'10px'}>{post.title}</PostContent>
          <PostContent width={'10%'}>{post.author}</PostContent>
          <PostContent width={'15%'}>{post.date}</PostContent>
          <PostContent width={'15%'}><DonationBar donation={post.donation}/></PostContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    border-bottom : 1px solid #dbdbdb;
    box-sizing : border-box;
    padding : 13px 0;
    
`
const PostContent = styled.div`
    width : ${(props) => props.width};
    text-align : ${(props) => props.align ? props.align : 'center'};
    font-size : 18px;
    color : var(--gray-color);
    box-sizing : border-box;
    padding-left : ${(props) => props.left};
`
export default PostCard