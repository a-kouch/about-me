import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, HeroBtnWrapper} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Hi! I'm Anthony Kouch</HeroH1>
            <HeroH2>Welcome to my website.</HeroH2>
            <HeroP>
                An optometrist and originally self taught programmer. I am now currently studying Data Analytics looking to leverage my own interests and skills into the realm of data science. 
            </HeroP>
            <HeroBtnWrapper>
                <Button
                    to='projects'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true'
                    offset={-80}                 
                    >My Projects
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection