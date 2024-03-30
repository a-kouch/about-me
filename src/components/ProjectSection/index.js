import React from 'react'
import Icon1 from '../../images/png-4.png'
import Icon2 from '../../images/png-5.png'
import Icon3 from '../../images/png-6.png'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectsIcons, SocialIconLink } from './ProjectsElements'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaPython} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BsFiletypeSql } from 'react-icons/bs'
import { SiNumpy , SiPandas, SiJupyter } from "react-icons/si";
import { AiFillGithub } from 'react-icons/ai'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            
            <ProjectsCard >
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>Data Science: Data Mining Project</ProjectsH2>
                <ProjectsIcons> <FaPython /> <SiNumpy /> <SiPandas /> <SiJupyter /> </ProjectsIcons>
                <ProjectsP>Data mining, data wrangling and combining real world health data presented in a Jupyter Notebook.</ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Learning to use Bokeh library for the first time to experiment with interactive visualisations. </ProjectsP>
                <ProjectsP><strong>Successes:</strong> Comfortable use of Pandas to combine heterogeneous data for cleaning and handling of missing values. </ProjectsP>
                <ProjectsP><strong>Technical aspects:</strong> Use of NumPy, Pandas for data wrangling of real world data. Bokeh used to visualised data to find meaningful relationships.</ProjectsP>
                <ProjectsP><strong>Link:</strong> 
                        <SocialIconLink href='//github.com/a-kouch/data-science-projects/blob/main/data-mining-project.ipynb' target='_blank' aria-label='GitHub'>
                            <AiFillGithub />
                        </SocialIconLink>
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard >
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>About Me: Anthony Kouch</ProjectsH2>
                <ProjectsIcons> <AiOutlineHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> </ProjectsIcons>
                <ProjectsP>This website! A portfolio website to present all my work</ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Understanding how to obtain responsive design across different screen sizes.</ProjectsP>
                <ProjectsP><strong>Successes:</strong>  Learning how to use React and React third-party libraries for the first time. </ProjectsP>
                <ProjectsP><strong>Technical aspects:</strong> Implementation of smooth scroll feature on main page, use of styled components to write CSS within JavaScript. </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>Understanding SQL and Pandas</ProjectsH2>
                <ProjectsIcons> <FaPython /> <BsFiletypeSql /> <SiNumpy /> <SiPandas /> <SiJupyter /> </ProjectsIcons>
                <ProjectsP>Reproduction of SQL queries through Pandas in Python. </ProjectsP>
                <ProjectsP><strong>Challenges:</strong> Aim to familiarise use and interpretation of SQL queries and reproducing their outputs using Python using real world data airport data from three New York airports in 2013.</ProjectsP>
                <ProjectsP><strong>Successes:</strong> Deepened understanding of SQL queries and how to use them. </ProjectsP>
                <ProjectsP><strong>Technical aspects :</strong> Working with a database to create SQL queries.</ProjectsP>
                <ProjectsP><strong>Link:</strong> 
                        <SocialIconLink href='//github.com/a-kouch/data-science-projects/blob/main/reproduction-of-sql-queries-using-pandas.ipynb' target='_blank' aria-label='GitHub'>
                            <AiFillGithub />
                        </SocialIconLink>
                </ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects