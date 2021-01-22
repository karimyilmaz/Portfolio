import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import {cardsData} from '../data/CardsData'

const SkillsSection = styled.div`
    position: absolute;
    top: 70%;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: #FF64CB;
    
`
const SkillsContent = styled.div`
    max-width: 100%;
    width: 100%;
    position: absolute;
    top: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        min-width: 30%;
        display: flex;
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
