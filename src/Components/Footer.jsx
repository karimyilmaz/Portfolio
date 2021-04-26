import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FooterSection = styled.div`
    position: relative;
    z-index: 4;
    display: grid;
    grid-template-columns: 66% auto;
    width: 100%;
    background: #6E00FF;
    height: 300px;

    @media(max-width: 900px){
        grid-template-columns: 100%;
    }
    
`
const Container = styled.div`
    display: flex; 
`
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    padding-left: 110px;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px){
        padding-right: 110px;
    }

    @media(max-width: 765px){
        padding: 0 3em;
    }

    @media(max-width: 619px){
        padding: 0 2em;
    }


    @media(max-width: 556px){
        padding: 0 1em;
    }

    
    @media(max-width: 375px){
        padding: 0 .7em;
    }

`

const Logo = styled(Link)`
    color: #00F7FF;
    font-weight: 700;
    font-size: 40px;
    text-decoration: none;

    @media(max-width: 506px){
        font-size: 45px;
    }

    @media(max-width: 414px){
        font-size: 40px;
    }

    @media(max-width: 375px){
        font-size: 30px;
    }

    @media(max-width: 320px){
        font-size: 39px;
    }

    @media(max-width: 280px){
        font-size: 25px;
    }

`
const LinksContainer = styled.div`
    display: flex;
    margin-right: 3em;

    @media(max-width: 1036px){
        margin-right: 0em;
    }
`
const Lnk = styled.a`
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    color: #fff;
    padding: 0 20px;
    cursor: pointer;

    @media(max-width: 506px){
        font-size: 14px;
        padding: 0 10px;
    }
    
    @media(max-width: 414px){
        font-size: 16px;
        padding-right: 1em;
    }

    @media(max-width: 375px){
        font-size: 15px;
        
    }

    @media(max-width: 360px){
        font-size: 15px;
        padding-right: 1em;
    }

    @media(max-width: 280px){
        font-size: 14px;
    }
    
`
// const FooterDesign = styled(Footerdesign)`
//  /* position: absolute; */
//  /* right: 5%; */
//  /* margin-bottom: 150%; */
//  /* bottom: 3em;
//  width: 25%; */
// `
const FooterDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    
    @media(max-width: 900px){
        display: none;
    }
    
    svg{
        position: absolute;
        bottom: 20.5%;
               
        
    }
`

let Footer = ({setClickedSkillsFooter}) => {
    
    gsap.registerPlugin(ScrollTrigger)

    let footerSvg = useRef([0, 0, 0, 0, 0, 0, 0])  
    footerSvg.current = footerSvg.current.map(item => React.createRef())
    
    

    useEffect(() => {
        // TweenMax.to(footerSvg.current[1].current, 4, {attr: {"fill-opacity": 0.91}}).repeat(16).yoyo(true)
        // TweenMax.to(footerSvg.current[2].current, 3, {attr: {"fill-opacity": 0.91}}).repeat(16).yoyo(true)
        // TweenMax.to(footerSvg.current[3].current, 5, {attr: {"fill-opacity": 1}}).repeat(10).yoyo(true)
        // TweenMax.to(footerSvg.current[4].current, 2, {attr: {cx:"300", cy: "180", r:"60"}}).repeat(2).yoyo(true)
        // TweenMax.to(footerSvg.current[5].current, 2, {attr: {r:"60"}}).repeat(2).yoyo(true)
        
        let tl = gsap.timeline({scrollTrigger: {
            trigger: footerSvg.current[0].current
            },
            yoyo: true
            
        })
        tl
        .to(footerSvg.current[1].current, {attr: {"fill-opacity": 0.4}, duration: 1.3, repeat: 5})
        .to(footerSvg.current[2].current, {attr: {"fill-opacity": 0.5}, duration: 1, repeat: 3}, "<")
        .to(footerSvg.current[3].current, {attr: {"fill-opacity": 1}, duration: 2, repeat: 4}, "<")
        .to(footerSvg.current[4].current, {attr: {"fill-opacity": 0.2}, duration: 1.8, repeat: 2}, "<")

        .to(footerSvg.current[5].current, {attr: {cx:"300", cy: "180", r:"60"}, duration: 5}, "<")
        .to(footerSvg.current[6].current, {attr: {r:"60"}, duration: 5, repeat:1}, "<")
        
        

    })
    
    return (
        <FooterSection>
           <Container>
                <Content>
                    <Logo>Karim</Logo>
                    
                    <LinksContainer>
                        <Lnk onClick={() => {setClickedSkillsFooter(true)}}>My skills</Lnk>
                        <Lnk href="https://wa.me/96178839346" target="_blank">Hire Me</Lnk>
                    </LinksContainer>
                </Content>
            </Container>
            
            <FooterDiv>
                <svg ref={footerSvg.current[0]} width="360" height="360" viewBox="0 0 360 360" fill="none">
                    <rect ref={footerSvg.current[1]} x="240" width="120" height="120" rx="23" fill="#5D00D7" fill-opacity="1"/>
                    <rect ref={footerSvg.current[2]} x="120" y="120" width="120" height="120" rx="23" fill="white"/>
                    <rect ref={footerSvg.current[3]} x="240" y="240" width="120" height="120" rx="23" fill="white"/>
                    <rect ref={footerSvg.current[4]} y="240" width="120" height="120" rx="23" fill="white" fill-opacity="0"/>
                    
                    <circle ref={footerSvg.current[5]} cx="300" cy="25" r="70" fill="#FF64CB"/>
                    <circle ref={footerSvg.current[6]} cx="180" cy="300" r="50" fill="#E8DEED"/>
                </svg>
            </FooterDiv>
            
            


                         
        </FooterSection>
    )
}

export default Footer
