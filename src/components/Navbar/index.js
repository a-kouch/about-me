import React from 'react';
import {IconContext} from 'react-icons/lib'
import {FaBars} from 'react-icons/fa';
import {AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavSocials, NavSocialIconLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop()
      }

  return (
    <>
    {/* this line changes the colour of the icons in case you need to */}
    <IconContext.Provider value={{ color: '#fa1e4e' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Anthony Kouch</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        {/* to='about' is going to direct to an id on the same page for reactscroll */}
                        <NavLinks 
                            to='/' onClick={toggleHome}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                            to='about'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='skills'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                            to='projects'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Projects</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavSocials>
                    <NavSocialIconLink href='//github.com/a-kouch' target='_blank' aria-label='GitHub'>
                        <AiFillGithub/>
                    </NavSocialIconLink>
                    <NavSocialIconLink href='//www.linkedin.com/in/anthony-k-444714229/' target='_blank' aria-label='LinkedIn'>
                        <AiOutlineLinkedin />
                    </NavSocialIconLink>
                    <NavSocialIconLink href='//twitter.com/_kouchy' target='_blank' aria-label='Twitter'>
                        <AiOutlineTwitter />
                    </NavSocialIconLink>
                    <NavSocialIconLink href='//instagram.com/_kouchy/' target='_blank' aria-label='Instagram'>
                        <AiOutlineInstagram />
                    </NavSocialIconLink>
                </NavSocials>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;