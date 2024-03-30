import React from 'react'
// import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, TopLineP1, TopLineP2, TopLineSoftware, TopLineP3, TopLineP4, InfoP1, InfoP2, InfoSoftware, InfoP3, InfoP4, InfoP5, InfoP6, InfoP7, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, topLine1, topLine2, topLineSoftware, topLine3, topLine4, description1, description2, description8, description3, description4, description5, description6, description7, img, alt}) => {
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
                            {/* <TopLineSoftware>{topLineSoftware}</TopLineSoftware>
                            <InfoSoftware darkText={darkText}>{description8}</InfoSoftware> */}
                            <TopLineP3>{topLine3}</TopLineP3>
                            <InfoP3 darkText={darkText}>{description3}</InfoP3>
                            <InfoP4 darkText={darkText}>{description4}</InfoP4>
                            <TopLineP4>{topLine4}</TopLineP4>
                            <InfoP5 darkText={darkText}>{description5}</InfoP5>
                            <InfoP6 darkText={darkText}>{description6}</InfoP6>
                            <InfoP7 darkText={darkText}>{description7}</InfoP7>
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