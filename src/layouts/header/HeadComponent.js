import React from 'react'
import styled from 'styled-components'
import SearchBox from './SearchBox';
import { useNavigate } from 'react-router-dom';
import store from '@/store/store';
import logoutHandler from '@/api/login/logoutHandler';
import { useDispatch } from 'react-redux';

const HeadComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = store.getState();

  return (
      <Wrapper>
          <Container>
              <HeadLogo onClick={() => navigate('/')}/>
              <Util>
                {
                    !state.auth.accessToken ? 
                    <Text onClick={() => navigate('/login')}>로그인</Text> : 
                    <Text onClick={() => logoutHandler(dispatch)}>로그아웃</Text>
                }
                  
                  <SearchBox/>
              </Util>
          </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 20px 250px;
`;

const Container = styled.div`
    display : flex;
    justify-content : space-between;
`

const HeadLogo = styled.div`
    background-color : #f1f1f1;
    width : 188px;
    height : 36px;

    cursor: pointer;
`

const Util = styled.div`
    box-sizing : border-box;
    padding : 0 10px;
    display : flex;
    gap : 30px;
    align-items : center;
`;

const Text = styled.div`
    color : #767676;
    font-size : 16px;
    cursor: pointer;

    &:hover{
        color : #111;
        font-weight : bold;
    }

`;


export default HeadComponent