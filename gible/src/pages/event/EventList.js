import Content from '@/components/event/Content'
import EventNavbar from '@/components/event/EventNavbar'
import Notice from '@/components/event/Notice'
import PageController from '@/components/event/PageController'
import Separator from '@/components/event/Separator'
import React from 'react'
import styled from 'styled-components'

const EventList = () => {
  return (
      <Wrapper>
          <Notice />
          <Container>
              <Separator />
              <EventNavbar />
              <Content />
              <PageController/>
          </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 100%;
    min-height : 100%;
    box-sizing : border-box;
    padding : 30px 200px;
    margin-bottom : 50px;
`

const Container = styled.div`
    box-sizing : border-box;
    padding : 20px 30px;
`

export default EventList