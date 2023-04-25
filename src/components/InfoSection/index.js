import React from 'react'
// import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, TopLineP1, TopLineP2, TopLineP3, TopLineP4, InfoP1, InfoP2, InfoP3, InfoP4, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, topLine1, topLine2, topLine3, topLine4, description1, description2, description3, description4, img, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <TopLineP1>{topLine1}</TopLineP1>
                            <InfoP1 darkText={darkText}>{description1}</InfoP1>
                            <TopLineP2>{topLine2}</TopLineP2>
                            <InfoP2 darkText={darkText}>{description2}</InfoP2>
                            <TopLineP3>{topLine3}</TopLineP3>
                            <InfoP3 darkText={darkText}>{description3}</InfoP3>
                            <TopLineP4>{topLine4}</TopLineP4>
                            <InfoP4 darkText={darkText}>{description4}</InfoP4>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection