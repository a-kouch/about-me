import React from 'react'
import Icon1 from '../../images/png-4.png'
import Icon2 from '../../images/png-5.png'
import Icon3 from '../../images/png-6.png'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectsIcons } from './ProjectsElements'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaPython} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BsFiletypeSql } from 'react-icons/bs'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>kouchy's kitchen</ProjectsH2>
                <ProjectsIcons> <AiOutlineHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> </ProjectsIcons>
                <ProjectsP>A revamp of my first ever website.</ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Familiarity with using React as a whole. </ProjectsP>
                <ProjectsP><strong>Successes:</strong> Learning how to use React and React third-party libraries for the first time. </ProjectsP>
                <ProjectsP><strong>Technical aspects:</strong> Use of React components to modularise functionality and code re-usability. Understanding how to use React Router to manage page routing.</ProjectsP>
            </ProjectsCard>
            <ProjectsCard >
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>About Me: Anthony Kouch</ProjectsH2>
                <ProjectsIcons> <AiOutlineHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> </ProjectsIcons>
                <ProjectsP>This website! A portfolio website to present all my work</ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Understanding how to obtain responsive design across different screen sizes.</ProjectsP>
                <ProjectsP><strong>Successes:</strong></ProjectsP>
                <ProjectsP><strong>Technical aspects:</strong> Implementation of smooth scroll feature on main page, use of styled components to write CSS within JavaScript. </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>Project #3</ProjectsH2>
                <ProjectsIcons> <FaPython /> <BsFiletypeSql /> </ProjectsIcons>
                <ProjectsP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Cumque vitae tempore voluptatum maxime reprehenderit eum exercitationem fugit, qui corporis.</ProjectsP>
                <ProjectsP><strong>Successes:</strong></ProjectsP>
                <ProjectsP><strong>Technical aspects :</strong></ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects