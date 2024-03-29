import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

// ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')}
// 
export const Nav = styled.nav`
    background: #ffffff;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 5px 10px 8px #888888; 

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

// This is a link with ReactRouter and ReactScroll
// LinkR - R is to indicate for react Router 
export const NavLogo = styled(LinkR)`
    color: #fa1e4e;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

// *.active This is the highlight at the bottom of the navmenu based on where you are scrolling on.
export const NavLinks = styled(LinkS)`
    color: #fa1e4e;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 3px solid #fa1e4e;
    }
`;

export const NavSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
`

export const NavSocialIconLink = styled.a`
    color: #fa1e4e;
    font-size: 24px;
`