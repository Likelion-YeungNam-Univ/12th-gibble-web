import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingComponent/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width  : 100%;
  height : 60vh;
  display : flex;
  justify-content : center;
  align-items : center;
`

const moving = keyframes`
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
`;

const LoadingComponent = styled.div`
  display: block;
  --height-of-loader: 4px;
  --loader-color: #ff0000;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: ${moving} 1s ease-in-out infinite;
  }
`;

export default Loading;