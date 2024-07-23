import React from 'react'
import PostCategory from './PostCategory'
import PostList from './PostList'
import styled from 'styled-components'
import { ReactComponent as WriteButton} from '@/assets/svg/post-write-button.svg'
import PageController from './PageController'

const Content = () => {
  return (
      <Wrapper>
          <PostCategory /> 
          <PostList />
          <ButtonContainer>
            <PageController/>
              <WriteButtonContainer>
                  <WriteBtn onClick={() => console.log('click') } />
                </WriteButtonContainer>
          </ButtonContainer>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom : 100px;

`

const ButtonContainer = styled.div`
    height : 150px;
    display : flex;
    justify-content : center;
    align-items: center;
    box-sizing : border-box;
    padding : 20px 0;
    position : relative;
`

const WriteBtn = styled(WriteButton)`
    cursor: pointer;
`

const WriteButtonContainer = styled.div`
    position : absolute;
    right : 10px;
    align-self : flex-end;
    display : flex;
    justify-content : center;
    align-items : center;
`

export default Content