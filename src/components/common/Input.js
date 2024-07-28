import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  font-family: pretendard;
  &::placeholder {
    color: #dbdbdb;
  }

  ${(props) =>
    props.$customStyles &&
    css`
      ${props.$customStyles}
    `}

    /* type=number일 시 상하 이동 버튼 삭제 */
  &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
