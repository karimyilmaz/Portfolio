import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 31% !important;
    height: 380px;
    
    
    /* min-width: 340px; */
    /* max-width: 370px; */
    /* margin-right: 25px; */
    
    background: #fff;
    border-radius: 11%;
    
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 30px 0 30px 0;

    @media(max-width: 1001px){
        height: 350px;
        max-height: 400px;
        border-radius: 2%;
        width: 100% !important;
        margin-bottom: 1.8em;
        padding: 0 0;
    }

    @media(max-width: 965px){
        height: auto;
        width: 100%;
        min-width: 100%;
    }

`
const Heading = styled.h3`
    font-weight: 800;
    text-align: center;
    font-size: 25px;
    margin-bottom: -20px;

    @media(max-width: 1101px){
        font-size: 22px;
    }
    @media(max-width: 1001px){
        font-size: 24px;
    }

    @media(max-width: 965px){
        margin-bottom: 20px;
    }

`
const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    max-width: 260px;

    @media(max-width: 1101px){
        font-size: 17px;
    }
    @media(max-width: 1001px){
        font-size: 17.5px;
    }
`
const Image = styled.img`
   
`
const Card = (props) => {
    return (
        <CardContainer>
            <Image src={props.source}/>
            <Heading>{props.heading}</Heading>
            <Paragraph>{props.para}</Paragraph>
        </CardContainer>
    )
}

export default Card 
