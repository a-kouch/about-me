import styled from "styled-components";

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    
    @media screen and (max-width: 1000px) {
        padding-top: 650px;
        padding-bottom: 650px;
    }

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
// grid-template-columns: 1fr 1fr 1fr; indicates 3 columns for the cards
// hence we can make it 2 or 1 column at smaller window sizes



export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2); 
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
// have a play with changing flex-direction: column, justify-content: flex-start; to change the orientation of the card items.
// originally it was flex-direction: flex-start and it looked very weirdly arranged

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fa1e4e;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ProjectsIcons = styled.p`
    font-size: 1.5rem;
    text-align: center;
`

export const SocialIcons = styled.div`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fa1e4e;
    font-size: 24px;
    // margin: 10px;

    &:hover {
        color: #010606;
        transition: 0.3s ease-out;
    }
`
