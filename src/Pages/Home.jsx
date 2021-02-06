import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Skills from '../Components/Skills'
import Footer  from '../Components/Footer'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import elixi from '../Images/elixi.PNG'
import papa from '../Images/papadapulos.PNG'
import cappa from '../Images/travel_cappadocia.PNG'

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh; 
`
const Container = styled.div`
    position: relative;
    width: 100%;
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
        margin-top: 250%;

    }

    @media(max-width: 937px){
        margin-top: 260%;

    }

    @media(max-width: 825px){
        margin-top: 290%;
    }

    @media(max-width: 808px){
        margin-top: 300%;
    }

    @media(max-width: 737px){
        margin-top: 350%;
        
    }

    /* @media(max-width:671px){
        margin-top: 350%;
        
    } */
    
    @media(max-width:585px){
        margin-top: 430%;
    }
    
    /* @media(max-width:535px){
        margin-top: 280%;
    } */
    
    @media(max-width:515px){
        margin-top: 500%;
    }

    /* @media(max-width:455px){
        margin-top: 330%;
    } */

    @media(max-width:375px){
        margin-top: 550%;
    }

    @media(max-width:320px){
        margin-top: 570%;
    }
    
    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        margin-top: 55%;
    }
`
const FeaturedContainerInner = styled.div`
    height: 350px;
`
const HireMe = styled.div`
    margin-top: 35%;
    display: flex;
    justify-content: center;
    cursor: context-menu;
    position: relative;
    z-index: -1;
    top: 15%;
    opacity: 0;

    a{  
        text-decoration: none;
        color: #5D00D7;
        margin-left: 10px;
    }

    @media(max-width: 630px){
        font-size: .8em;
    }

    @media(max-width: 500px){
        font-size: .7em;
    }

    @media(max-width: 411px){
        font-size: .6em;
    }

    @media(max-width: 375px){
        font-size: .5em;
    }

    @media(max-width: 280px){
        font-size: .4em;
    }

`


const Home = () => {
    gsap.registerPlugin(ScrollTrigger)

    let hireMeRef = useRef(null)
    
    useEffect(() => {
        gsap.to(hireMeRef.current, {
            scrollTrigger: {
             trigger: hireMeRef.current   
            },

            top: "0",
            opacity: 1,
            duration: 2
            
        })
    
    }, [])

    return (
        <HomeContainer>
           <Navbar/>
            <Hero/>
            <Container>
                <IContainer></IContainer>
                <Featured
                reversed = {false}   
                showCircle = {true}
                smheading='FEATURED PROJECT' 
                heading2 = 'Elixi.com Real estate App'
                paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor convallis adipiscing duis nulla at sagittis. Nullam in volutpat venenatis nibh tincidunt sit tincidunt lectus.'
                source={elixi}
                />
                <Skills/>
            </Container>
            <FeaturedContainer>
                <Featured 
                    reversed = {true}   
                    showCircle = {true}
                    smheading='FEATURED PROJECT' 
                    heading2 = 'Papadopoulos-pizza.com'
                    paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor convallis adipiscing duis nulla at sagittis. Nullam in volutpat venenatis nibh tincidunt sit tincidunt lectus.'
                    source={papa}
                    mt={true}
                />

                <FeaturedContainerInner/>

                <Featured
                    reversed = {false}   
                    showCircle = {false}
                    smheading='FEATURED PROJECT' 
                    heading2 = 'travel-cappadocia.com'
                    paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor convallis adipiscing duis nulla at sagittis. Nullam in volutpat venenatis nibh tincidunt sit tincidunt lectus.'
                    source={cappa}
                />
            </FeaturedContainer>
            
            <HireMe ref={hireMeRef}><h1>Like What you See?<a href='https://wa.me/96178839346' target='_blank' rel='noreferrer'>Hire Me</a></h1></HireMe>
            <Footer></Footer>                   
        </HomeContainer>
    )
}

export default Home
