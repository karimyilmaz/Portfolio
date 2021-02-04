import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {TweenMax} from 'gsap'


const FooterSection = styled.div`
    position: relative;
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
    padding-left: 6em;
    margin-top: 1em;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px){
        padding-right: 6em;
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
    font-size: 47px;
    text-decoration: none;

    @media(max-width: 506px){
        font-size: 40px;
    }

    @media(max-width: 320px){
        font-size: 30px;
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
    font-size: .8em;
    color: #fff;
    padding: 0em .9em;
    
    @media(max-width: 506px){
        font-size: .7em;
    }
    
    @media(max-width: 414px){
        font-size: .6em;
        padding-right: 1em;
    }

    @media(max-width: 360px){
        font-size: .5em;
        padding-right: 1em;
    }

    @media(max-width: 280px){
        font-size: .4em;
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

let Footer = () => {
    
    let footerSvg = useRef([0, 0, 0, 0, 0, 0])  
    footerSvg.current = footerSvg.current.map(item => React.createRef())
    
    useEffect(() => {
        TweenMax.to(footerSvg.current[1].current, 4, {attr: {"fill-opacity": 0.91}}).repeat(16).yoyo(true)
        TweenMax.to(footerSvg.current[2].current, 3, {attr: {"fill-opacity": 0.91}}).repeat(16).yoyo(true)
        TweenMax.to(footerSvg.current[3].current, 5, {attr: {"fill-opacity": 1}}).repeat(10).yoyo(true)
        TweenMax.to(footerSvg.current[4].current, 2, {attr: {cx:"300", cy: "180", r:"60"}}).repeat(2).yoyo(true)
        TweenMax.to(footerSvg.current[5].current, 2, {attr: {r:"60"}}).repeat(2).yoyo(true)
        
    }, [])
    
    
    return (
        <FooterSection>
           <Container>
                <Content>
                    <Logo>Karim</Logo>
                    
                    <LinksContainer>
                        <Lnk href="#work">My work</Lnk>
                        <Lnk href="#skills">My skills</Lnk>
                        <Lnk href="https://wa.me/96178839346" target="_blank">Hire Me</Lnk>
                    </LinksContainer>
                </Content>
            </Container>
            
            <FooterDiv>
                <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
                    <rect ref={footerSvg.current[0]} x="240" width="120" height="120" rx="23" fill="#5D00D7" fill-opacity="1"/>
                    <rect ref={footerSvg.current[1]} x="120" y="120" width="120" height="120" rx="23" fill="white"/>
                    <rect ref={footerSvg.current[2]} x="240" y="240" width="120" height="120" rx="23" fill="white"/>
                    <rect ref={footerSvg.current[3]} y="240" width="120" height="120" rx="23" fill="white" fill-opacity="0"/>
                    
                    <circle ref={footerSvg.current[4]} cx="300" cy="25" r="70" fill="#FF64CB"/>
                    <circle ref={footerSvg.current[5]} cx="180" cy="300" r="50" fill="#E8DEED"/>
                </svg>
            </FooterDiv>
            
            


                         
        </FooterSection>
    )
}

export default Footer
