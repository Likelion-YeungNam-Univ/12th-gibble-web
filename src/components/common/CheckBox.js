import styled, { css } from "styled-components"

const CheckBox = styled.input.attrs({type: 'checkbox'})`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: var(--24, 34px);
    letter-spacing: -0.6px;
    margin: 10px 10px 10px 0px;
    accent-color: var(--main-color);
    border-radius: 5px;

    ${ props => props.$customStyles && css`
        ${props.$customStyles}
    `}
`

export default CheckBox;