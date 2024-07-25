import React from 'react'
import { ReactComponent as Left } from '@/assets/svg/left-move.svg'
import { ReactComponent as Right } from '@/assets/svg/right-move.svg'
import styled from 'styled-components'

const PageController = () => {
  return (
      <Wrapper>
          <LeftBtn/>
          <PageNumList>
              <PageNum>1</PageNum>
              <PageNum>2</PageNum>
              <PageNum>3</PageNum>
              <PageNum>4</PageNum>
              <PageNum>5</PageNum>
            </PageNumList>
          <RightBtn/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    align-items : center;
`

const LeftBtn = styled(Left)`
    border-radius : 50%;
    padding : 7px;
    display : flex;
    justify-content : center;
    align-items : center;
    &:hover{
        background-color : #f1f1f1;
    }
`

const RightBtn = styled(Right)`
    border-radius : 50%;
    padding : 7px;
    display : flex;
    justify-content : center;
    align-items : center;
    &:hover{
        background-color : #f1f1f1;
    }
`

const PageNumList = styled.div`
    width : 230px;
    display : flex;
    justify-content : space-around;
`

const PageNum = styled.div`
    font-size : 18px;
    &:hover{
        color : var(--main-color);
        border-bottom : 1px solid var(--main-color);
        font-weight : bold;
    }

`

export default PageController