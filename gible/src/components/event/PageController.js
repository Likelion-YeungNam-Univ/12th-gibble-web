import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LeftMove } from '@/assets/left-move.svg'
import { ReactComponent as RightMove } from '@/assets/right-move.svg'

const PageController = () => {
  return (
      <Wrapper>
          <LeftButton />
          <Page>1</Page>
          <RightButton/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    box-sizing : border-box;
    padding : 0 45%;
`

const Page = styled.div`
    width : 50px;
    font-size : 22px;
    font-weight : bold;
    display : flex;
    justify-content: center;
    align-items : center;
`

const LeftButton = styled(LeftMove)`
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 10px;
    border-radius : 50%;
    transition : 0.3s;
    &:hover{
        background-color : #f1f1f1;
    }
`

const RightButton = styled(RightMove)`
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 10px;
    border-radius : 50%;
    transition : 0.3s;
    &:hover{
        background-color : #f1f1f1;
    }
`

export default PageController