import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, NavLinks, FooterLink, SocialMedia, SocialMediaWrap, SiteTitle, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                {/* each wrapper is the column */}
                <FooterLinksWrapper>
                    {/* each item is a block within the column */}
                    <FooterLinkItems>
                        <FooterLinkTitle>Navigation</FooterLinkTitle>
                            <NavLinks to='/' onClick={toggleHome}>Home</NavLinks>
                            <NavLinks 
                                to='about'
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                                >About</NavLinks>
                            <NavLinks 
                                to='skills'
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Skills</NavLinks>
                            <NavLinks 
                                to='projects'
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Projects</NavLinks>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        {/* if we want to link to an external site change <FooterLink> to an <a> tag with a href. */}
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href='//github.com/a-kouch' target='_blank' aria-label='GitHub'>GitHub</FooterLink>
                            <FooterLink href='//www.linkedin.com/in/anthony-k-444714229/' target='_blank' aria-label='LinkedIn'>LinkedIn</FooterLink>
                            <FooterLink href='//twitter.com/_kouchy' target='_blank' aria-label='Twitter'>Twitter</FooterLink>
                            <FooterLink href='//instagram.com/_kouchy/' target='_blank' aria-label='Instagram'>Instagram</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SiteTitle to='/' onClick={toggleHome}>Anthony Kouch</SiteTitle>
                    {/* {new Date().getFullYear()} gets the year automatically without you having to update it all the time */}
                    <WebsiteRights> Anthony Kouch © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        {/* target='_blank' opens up a new page */}
                        {/* use a double slash if you want to link to a page // */}
                        <SocialIconLink href='//github.com/a-kouch' target='_blank' aria-label='GitHub'>
                            <AiFillGithub />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/in/anthony-k-444714229/' target='_blank' aria-label='LinkedIn'>
                            <AiOutlineLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='//twitter.com/_kouchy' target='_blank' aria-label='Twitter'>
                            <AiOutlineTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='//instagram.com/_kouchy/' target='_blank' aria-label='Instagram'>
                            <AiOutlineInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer