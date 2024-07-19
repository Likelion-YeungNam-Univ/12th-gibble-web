import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet} from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
  return (
      <PageContainer>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height : 100vh;
`;

const Content = styled.div`
  flex: 1;
  display : flex;
  width : 100%;
  min-height : 100%;
`;

export default Layout