import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'


import {TweenMax} from 'gsap'

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 66% auto;
    /* width: 100%; */
    /* height: calc(100% - 80px); */
    height: calc(100% - 180px);
    visibility: hidden;
    
    #hero-design{
        margin-top: 12%;
        margin-left:-49.8%;
        width: 100%;
    }

    @media(max-width: 1140px){
        grid-template-columns: 100%;

        #hero-design{
            display: none;
        }
    }
`
const Container = styled.div`
    background: #6E00FF;

    @media(max-width: 1069px){
        display: flex;
        justify-content: center;
    }
`

const Content = styled.div`
    /* padding-left: 110px; */
    padding: 80px 0px 0px 110px;
    cursor: context-menu;

    @media(max-width: 1140px){
        padding: 80px 110px 0px 110px;
    }
    
    @media(max-width: 683px){
        padding: 90px 20px;
    }

    @media(max-width: 526px){
        padding: 85px 10px;
    }

    @media(max-width: 414px){
        padding: 25% 1em;
    }
    
    @media(min-width: 1024px) and (max-width: 1025px) and (min-height: 1366px) and (max-height: 1366px){
        padding: 30% 6em;
    }

    h1{
        line-height: 140%;
        width: 400px;
        color: #fff;
        font-size: 60px;
        font-weight: bold;

        @media(max-width: 1140px){
            width: 100%;
            text-align: center;
        }

        @media(max-width: 879px){
            font-size: 50px;
        }

        @media(max-width: 526px){
            font-size: 45px;
        }

        
    }

    h4{
        color: #FF64CB;
        font-size: 26px;
        letter-spacing: 1px;
        
        span{
            margin-right: 4px;
        }
        
        @media(max-width: 1140px){
            width: 100%;
            text-align: center;
        }
    }
`
    const ImageContainer = styled.div`
        display: flex;

        @media(max-width: 1140px){
            justify-content: center;
        }
`

const Hero = () => {
    let scroll = useRef() //{current: svg}
    // let animate_scroll
    let hero_container = useRef()
    let hero_design = useRef([])
    hero_design.current = [0,0,0,0,0,0,0,0].map((ref, index) => hero_design.current[index] = React.createRef())
    

    useEffect(() => {
            TweenMax.to(scroll.current, 1.2, {attr:{cy: 40.8788}}).repeat(-1).yoyo(true)    
        
            TweenMax.to(hero_container.current, 2, {visibility: "visible", height: "calc(100% - 80px)"})    

            TweenMax.to(hero_design.current[0].current, .8, {attr:{"fill-opacity": 0.91}}).repeat(10).yoyo(true)    
            TweenMax.to(hero_design.current[1].current, 2.3, {attr:{"fill-opacity": 0.5}}).repeat(6).yoyo(true)    
            TweenMax.to(hero_design.current[2].current, .1, {attr:{"fill-opacity": 1}}).repeat(6).yoyo(true)    
            TweenMax.to(hero_design.current[3].current, 1.3, {attr:{"fill-opacity": 1}}).repeat(12).yoyo(true)    
            TweenMax.to(hero_design.current[4].current, 1.5, {attr:{"fill-opacity": 1}}).repeat(10).yoyo(true)    
            TweenMax.to(hero_design.current[5].current, 2, {attr:{"fill-opacity": .8}}).repeat(10).yoyo(true)    
        
            TweenMax.to(hero_design.current[6].current, 1, {attr:{"cx": 166 ,"cy": 274}}).repeat(3).yoyo(true)    
            TweenMax.to(hero_design.current[7].current, 1, {"cx":276 ,"cy":164}).repeat(1).yoyo(true)    
    }, [])

    return (
        <HeroContainer ref={hero_container}> 
            <Container>
                <Content>
                    <h1>Beautifly Crafted Web Experiences</h1>
                    <h4><span>👇</span>Meet Karim</h4>
                    <ImageContainer>
                    
                                                
                        <svg width="45" height="67" viewBox="0 0 45 67" fill="none">
                            <g filter="url(#filter0_d)">
                            <rect x="8" y="4" width="29" height="51" rx="14.5" stroke="white" stroke-width="8"/>
                            </g>
                            <ellipse ref={scroll} cx="22.0488" cy="17.8788" rx="6.31707" ry="6.25758" fill="white"/>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="45" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                        </svg> 
                        

                        
                        
                        
                    </ImageContainer>                                   
                </Content>
            </Container>

            <svg id="hero-design" width="445" height="439" viewBox="0 0 445 439" fill="none">
                <rect ref={hero_design.current[0]} x="222" width="110" height="110" rx="23" fill="#5D00D7" fill-opacity="0.3"/>
                <rect ref={hero_design.current[1]} x="222" y="220" width="110" height="110" rx="23" fill="#5D00D7" fill-opacity="0.8"/>

                <path ref={hero_design.current[2]} d="M331 132C331 119.297 341.297 109 354 109H418C430.703 109 441 119.297 441 132V196C441 208.703 430.703 219 418 219H354C341.297 219 331 208.703 331 196V132Z" fill="#5D00D7" fill-opacity="0.4"/>
                <path ref={hero_design.current[3]} opacity="0.1" d="M110 133C110 120.297 120.297 110 133 110H197C209.703 110 220 120.297 220 133V197C220 209.703 209.703 220 197 220H133C120.297 220 110 209.703 110 197V133Z" fill="white" fill-opacity="0.5"/>
                <rect ref={hero_design.current[4]} x="112" y="329" width="110" height="110" rx="23" fill="white"/>
                <rect ref={hero_design.current[5]} y="220" width="110" height="110" rx="23" fill="white" fill-opacity="0.4"/>
                <circle ref={hero_design.current[6]} cx="276" cy="164" r="55" fill="#FF64CB"/>
                <circle ref={hero_design.current[7]} cx="166" cy="274" r="55" fill="#E8DEED"/>
                <defs>
                <filter id="filter0_d" x="327" y="109" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>

            
        </HeroContainer>
        
    )}

export default Hero 

