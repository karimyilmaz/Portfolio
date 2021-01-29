import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import {cardsData} from '../data/CardsData'

const SkillsSection = styled.div`
    position: relative;
    top: -45%;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #FF64CB;
    
    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        height: 80%;
    }

    @media(max-width: 1244px){
        top: -35%;
    }

    @media(max-width: 1095px){
        top: -30%;
    }

    @media(max-width: 1001px){
        top: -50%;
        height: 1400px;
        padding-bottom: 2em;
    }

    @media(max-width: 975px){
        top: -25%;
    }

    @media(max-width: 965px){
        top: -15%;
    }

    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        top: -70%;
    }
    
`
const SkillsContent = styled.div`
    width: 100%;
    position: relative;
    top: 40%;
    padding: 0 50px 0 50px;

    @media(max-width: 1156px){
        padding: 0 20px 0 20px;
    }

    @media(max-width: 1001px){
        top: 20%;
    }

    @media(max-width: 965px){
        top: 20%;
    }

    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        top: 63%;
    }

    div{
        width: calc(100% - 100px);    
        display: flex;
        justify-content: space-between;

        @media(max-width:1156px){
           width: calc(100% - 40px); 
        }

        @media(max-width: 1001px){
            flex-direction: column;
        }
    }

    
`    

const Skills = () => {
    return (
        
        <SkillsSection>
            <SkillsContent>
                <div>
                {cardsData.map(object =>   <Card source={object.source} heading={object.heading} para={object.paragraph} /> )}
                </div>


            </SkillsContent>
            
        </SkillsSection>
        
    )
}

export default Skills
