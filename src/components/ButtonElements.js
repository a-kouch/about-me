import styled from "styled-components";
import {Link} from "react-scroll";

export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? 'transparent' : '#fa1e4e')};
    // background: transparent
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fa1e4e' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#fa1e4e')};
    }
`;