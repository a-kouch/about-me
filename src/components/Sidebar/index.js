import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideSocialWrap, SideSocialIcon} from './SidebarElements'
import {AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Sidebar = ({isOpen, toggle }) => {
  return (
    // this closes the side bar for when you click anywhere within the sidebar
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialWrap>
                    <SideSocialIcon href='//github.com/a-kouch' target='_blank' aria-label='GitHub'>
                        <AiFillGithub/>
                    </SideSocialIcon>
                    <SideSocialIcon href='//www.linkedin.com/in/anthony-k-444714229/' target='_blank' aria-label='LinkedIn'>
                        <AiOutlineLinkedin />
                    </SideSocialIcon>
                    <SideSocialIcon href='//twitter.com/_kouchy' target='_blank' aria-label='Twitter'>
                        <AiOutlineTwitter />
                    </SideSocialIcon>
                    <SideSocialIcon href='//instagram.com/kouchykoo/' target='_blank' aria-label='Instagram'>
                        <AiOutlineInstagram />
                    </SideSocialIcon>
                </SideSocialWrap>
            </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar