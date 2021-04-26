import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Card from './Card'
import {cardsData} from '../data/CardsData'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillsSection = styled.div`
    position: relative;
    top: -45%;
    z-index: -1;
    /* width: 100%; */
    height: 100%;
    background: #FF64CB;
    
    
    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        height: 80%;
    }

    @media(max-width: 1244px){
        top: -35%;
    }

    @media(max-width: 1095px){
        top: -38%;
    }

    @media(max-width: 1001px){
        top: -43%;
        height: 1850px;
        padding-bottom: 2em;
    }

    @media(max-width: 975px){
        /* top: -39%; */
    }

    @media(max-width: 965px){
        top: -15%;
        height: 2000px;

    }

    @media(max-width: 827px){
        top: -10%;
        height: 2000px;

    }

    @media(max-width: 414px){
        top: -25%;
        height: 1850px;

    }

    

    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        top: -70%;
    }
    
`
const SkillsContent = styled.div`
    /* width: 100%; */
    position: relative;
    top: 70%;

    padding: 0 50px 0 50px;

    @media(max-width: 1156px){
        padding: 0 20px 0 20px;
    }

    @media(max-width: 1001px){
        top: 20%;
    }

    @media(max-width: 965px){
        top: 27%;
    }

    @media(max-width: 500px){
        top: 28%;
    }

    /* @media(max-width: 375px){
        top: 28%;
    } */

    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        top: 63%;
    }

    div{
        /* width: calc(100% - 100px);     */
        display: flex;
        justify-content: space-between;
        
        @media(max-width:1156px){
           /* width: calc(100% - 40px);  */
        }

        @media(max-width: 1001px){
            flex-direction: column;
        }
    }

    
`    

const Skills = ({clickedSkills, setClickedSkills, clickedSkillsFooter, setClickedSkillsFooter}) => {
    gsap.registerPlugin(ScrollTrigger)
    let skillsContentRef = useRef()

    const smoothScroll = (h, j) => {
        let i = h
        if (i <= j) {
          setTimeout(() => {
            document.body.scrollTo(0, i);

            smoothScroll(i + 60, j);
          }, 12);
        }
      }
    
    const scrollFromBottom = (i , y) => {
        let n_i = (i===0 ? document.body.scrollHeight - 40 : i)//5281
        // let offset = skillsContentRef.current.offsetTop + skillsContentRef.current.offsetHeight
        
        if (n_i >= y) {
          setTimeout(() => {
            document.body.scrollTo(0, n_i);

            scrollFromBottom(n_i - 60, y);
          }, 10);
        }
    }
      



    useEffect(() => {
       window.innerWidth > 1001 && (gsap.to(skillsContentRef.current, {
            scrollTrigger: {
                trigger: skillsContentRef.current,
                duration: 2,
                start: "top center"
            },
            top: "40%"
        }))
        
    }, [])
    
    useEffect(() => {
        if(clickedSkills){
            let to = window.innerWidth <= 1002 ? 1700: 1500
            smoothScroll(0,  to)
            setClickedSkills(false)
        }

        if(clickedSkillsFooter){
            let to = window.innerWidth <= 1002 ? 1700: 1500
            scrollFromBottom(0, to)
            setClickedSkillsFooter(false)
        }
// 965px
        
    }, [clickedSkills, clickedSkillsFooter])



    
    return (
        
        <SkillsSection id='skills'>
            <SkillsContent id='skills-content' ref={skillsContentRef}>
                <div>
                    {cardsData.map(object =>   <Card source={object.source} heading={object.heading} para={object.paragraph} /> )}
                </div>
            </SkillsContent>
            
        </SkillsSection>
        
    )
}

export default Skills
