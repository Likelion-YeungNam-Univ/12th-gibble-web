import PageNotice from '@/components/common/PageNotice'
import Separator from '@/components/common/Separator'
import ReviewCard from '@/components/review/ReviewCard'
import React from 'react'
import styled from 'styled-components'
import PageController from '../../components/review/PageController';

const Review = () => {

  const result = [
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    },
    {
      id: 'fjdsflacnl3nkflnl',
      title: '너무 감사',
      date: '2024.07.30'
    }
  ]

  return (
    <Wrapper>
        <PageNotice location={['Home','커뮤니티','투명 후기']} />
        <Separator title={'투명후기'} />
        <Container>
          {result.map((el,idx) => {
            return <ReviewCard review={el}></ReviewCard>
          })}
        </Container>
        <PageControllerContainer>
          <PageController/>
        </PageControllerContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 0 10%;

    width : 100%;
`

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : start;
    gap : calc(4%/2);
    flex-wrap : wrap;
    box-sizing : border-box;
    padding : 0 auto;
`

const PageControllerContainer = styled.div`
  display : flex;
  justify-content : center;
  margin : 30px 0 100px 0;
`

export default Review