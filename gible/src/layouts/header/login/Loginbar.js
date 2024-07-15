import React from 'react';
import styled from 'styled-components';

const Loginbar = () => {
    return (
        <LoginBox>
            <StyledBox />
        </LoginBox>
    );
}

const LoginBox = styled.div`
    display: flex; /* Flexbox 사용 */
    justify-content: center; /* 가로 중앙 정렬 (필요에 따라) */
    align-items: center; /* 세로 중앙 정렬 (필요에 따라) */
`;

const StyledBox = styled.div`
    height: 60px;
    flex-shrink: 0;
    background: #FFF;
    width: 100%; 
`;

export default Loginbar;
