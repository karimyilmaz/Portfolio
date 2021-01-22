import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 370px;
    min-width: 340px;
    max-width: 370px;
    height: 500px;
    
    margin-right: 25px;
    background: #fff;
    border-radius: 11%;
    
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 2em 0em;
`
const Heading = styled.h3`
    font-weight: 800;
    text-align: center;

`
const Paragraph = styled.p`
    font-weight: 400;
    font-size: .9em;
    text-align: center;
    max-width: 250px;
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
