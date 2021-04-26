import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Skills from '../Components/Skills'
import Footer  from '../Components/Footer'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import elixi from '../Images/elixi.png'
import papa from '../Images/papadapulos.png'
import cappa from '../Images/travelcappadocia.png'
import room from '../Images/room.png'

const HomeContainer = styled.div`
    /* width: 100%; */
    height: 100vh; 
`
const Container = styled.div`
    position: relative;
    /* width: 100%; */
    height: 100%;

    &::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 295px;
        width: 295px;
        border-radius: 50%;
        background: #5D00D7;
        opacity: 0.3;
        z-index: -1;
        
        @media(max-width: 375px){
            height: 200px;
            width: 200px;
        }

        @media(max-height: 812px){
            height: 300px;
            width: 300px;
        }
    }

    
`
const IContainer = styled.div`
    height: 120px;

    @media(max-width: 965px){
        height: 0px;
    }

`

const FeaturedContainer = styled.div`
    margin-top: 70%;

    /* @media(max-width: 1235px){
        margin-top: 60%;
    } */

    @media(max-width: 1084px){
        margin-top: 100%;
    }

    @media(max-width: 1001px){
        margin-top: 210%;
    }
    @media(max-width: 965px){
        margin-top: 220%;

    }

    @media(max-width: 937px){
        margin-top: 240%;

    }

    @media(max-width: 825px){
        margin-top: 250%;
    }

    @media(max-width: 808px){
        margin-top: 280%;
    }

    @media(max-width: 737px){
        margin-top: 300%;
        
    }

    @media(max-width:671px){
        margin-top: 340%;
        
    }
    
    @media(max-width:585px){
        margin-top: 400%;
    }
    
    /* @media(max-width:535px){
        margin-top: 280%;
    } */
    
    @media(max-width:515px){
        margin-top: 488%;
        margin-bottom: 90%;
    }

    @media(max-width:414px){
        margin-top: 440%;
    }

    @media(max-width:375px){
        margin-top: 500%;
    }

    @media(max-width:320px){
        margin-top: 550%;
    }
    
    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        margin-top: 55%;
    }

    
`
const FeaturedContainerInner = styled.div`
    height: 350px;

    @media(max-width: 375px){
        height: 230px;
    }
`
const HireMe = styled.div`
    font-weight: 800;
    font-size: 35px;
    margin-top: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: context-menu;
    position: relative;
    z-index: -1;
    top: 15%;
    opacity: 0;
/* 
    @media(max-width: 375px){
        font-size: 30px;
    } */

    a{  
        text-decoration: none;
        color: #5D00D7;
        margin-left: 10px;
    }

    @media(max-width: 630px){
        font-size: 25px;
    }

    @media(max-width: 500px){
        font-size: 20px;
    }

    @media(max-width: 411px){
        font-size: 15px;
    }

    @media(max-width: 375px){
        font-size: 20px;
    }

    @media(max-width: 280px){
        font-size: 10.5px;
    }

`


const Home = () => {
    const [clickedSkills, setClickedSkills] = useState(false)
    const [clickedSkillsFooter, setClickedSkillsFooter] = useState(false)
    
    gsap.registerPlugin(ScrollTrigger)

    let hireMeRef = useRef(null)
    
    useEffect(() => {
        gsap.to(hireMeRef.current, {
            scrollTrigger: {
             trigger: hireMeRef.current   
            },

            top: "0",
            opacity: 1,
            zIndex: 2,
            duration: 3
            
        })
        
    }, [])

    return (
        <HomeContainer>
           <Navbar setClickedSkills={setClickedSkills}/>
            <Hero/>
            <Container>
                <IContainer></IContainer>
                <Featured
                reversed = {false}   
                showCircle = {true}
                smheading='FEATURED PROJECT' 
                heading2 = 'Elixi Real estate App'
                paragraph = "It's a website for a Real estate company called Elixi. Built with React.js and Styled-components. It has a responsive design. One of the main features of this project was the automatic carousel in the hero section."
                source={elixi}
                />
                <Skills clickedSkills={clickedSkills} setClickedSkills={setClickedSkills} clickedSkillsFooter={clickedSkillsFooter} setClickedSkillsFooter={setClickedSkillsFooter}/>
            </Container>
            <FeaturedContainer>
                <Featured 
                    reversed = {true}   
                    showCircle = {true}
                    smheading='FEATURED PROJECT' 
                    heading2 = 'Papadopoulos pizza'
                    paragraph = "It's My first Site that I built. Yes! I was thinking about Pizza 😂. I've intended to include it here because it always shows me how much progress I've made. Some of the main features: Changing the language of the site into Arabic, and a SignIn Signup page with a backend connected to it."
                    source={papa}
                    mt={true}
                />

                <FeaturedContainerInner/>

                <Featured
                    reversed = {false}   
                    showCircle = {false}
                    smheading='FEATURED PROJECT' 
                    heading2 = 'Travel Cappadocia'
                    paragraph = 'This homepage is for promoting tourism in Cappadocia. Main Features: video background, and when the menu icon pressed the whole hompage will be shifted to the left.'
                    source={cappa}
                />

                <FeaturedContainerInner/>

                <Featured 
                    reversed = {true}   
                    showCircle = {false}
                    smheading='FEATURED PROJECT' 
                    heading2 = 'Room'
                    paragraph = "This was a challenge that has been published on the frontendmentor.io It's the Homepage for a furniture company. I'm in ❤ with the design. Built with SASS, CSS Grid, and React.js. It's fully responsive."
                    source={room}
                />

            </FeaturedContainer>
            
            <HireMe ref={hireMeRef}><p>You can find more on my</p><a href="https://github.com/karimyilmaz" target='_blank' rel='noreferrer'>GitHub</a></HireMe>
            
            <Footer setClickedSkillsFooter={setClickedSkillsFooter}/>                   
            
        </HomeContainer>
    )
}

export default Home
