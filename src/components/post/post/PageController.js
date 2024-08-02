import React from 'react'
import { ReactComponent as Left } from '@/assets/svg/left-move.svg'
import { ReactComponent as Right } from '@/assets/svg/right-move.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PageController = ({nowPage, setNowPage, totalPages}) => {
    const navigate = useNavigate();

    const handleLeftClick = () => {
        if (nowPage > 0) {
            setNowPage(prev => prev-1)
            navigate(`/post?page=${nowPage-1}`);
        }
      };
    
      const handleRightClick = () => {
        if( nowPage < totalPages-1 ){
            setNowPage(prev => prev+1);
            navigate(`/post?page=${nowPage+1}`);
        }
            
      };

  return (
      <Wrapper>
          <LeftBtn onClick={() => handleLeftClick()}/>
          <PageNumList>
              <PageNum>{nowPage+1}</PageNum>
            </PageNumList>
          <RightBtn onClick={() => handleRightClick()}/>
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