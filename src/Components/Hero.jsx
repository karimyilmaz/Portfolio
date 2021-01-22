import React from 'react'
import styled from 'styled-components'


const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 66% auto;
    width: 100%;
    height: calc(100% - 80px);

    svg{
        margin-top: 12%;
        margin-left:-49.8%;
        width: 100%;
    }
`
const Container = styled.div`
    background: #6E00FF;
`

const Content = styled.div`
    padding: 5% 6em;
    cursor: context-menu;
    
    h1{
        line-height: 130%;
        width: 400px;
        color: #fff;
        font-size: 2.7em;
        font-weight: bold;
    }

    h4{
        color: #FF64CB;
        font-size: 1.3em;
        span{
            margin-right: 4px;
        }
    }

    svg{
        margin-top: 0%;
        margin-left:0%;
        width: auto;
    }
`


const Hero = () => {
    return (
        <HeroContainer> 
            <Container>
                <Content>
                    <h1>Beautifly Crafted Web Experiences</h1>
                    <h4><span>👇</span>Meet Karim</h4>
                    <svg width="45" height="67" viewBox="0 0 45 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <rect x="8" y="4" width="29" height="51" rx="14.5" stroke="white" stroke-width="8"/>
                        </g>
                        <ellipse cx="22.0488" cy="17.8788" rx="6.31707" ry="6.25758" fill="white"/>
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
                </Content>
            </Container>

            <svg width="445" height="439" viewBox="0 0 445 439" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="222" width="110" height="110" rx="23" fill="#5D00D7" fill-opacity="0.91"/>
<rect x="222" y="220" width="110" height="110" rx="23" fill="#5D00D7" fill-opacity="0.91"/>

<path d="M331 132C331 119.297 341.297 109 354 109H418C430.703 109 441 119.297 441 132V196C441 208.703 430.703 219 418 219H354C341.297 219 331 208.703 331 196V132Z" fill="#5D00D7" fill-opacity="0.4"/>
<path opacity="0.1" d="M110 133C110 120.297 120.297 110 133 110H197C209.703 110 220 120.297 220 133V197C220 209.703 209.703 220 197 220H133C120.297 220 110 209.703 110 197V133Z" fill="white"/>
<rect x="112" y="329" width="110" height="110" rx="23" fill="white"/>
<rect y="220" width="110" height="110" rx="23" fill="white" fill-opacity="0.4"/>
<circle cx="276" cy="164" r="55" fill="#FF64CB"/>
<circle cx="166" cy="274" r="55" fill="#E8DEED"/>
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
 