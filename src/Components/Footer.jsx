import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


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
const NavLink = styled(Link)`
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
    return (
        <FooterSection>
           <Container>
                <Content>
                    <Logo>Karim</Logo>
                    
                    <LinksContainer>
                        <NavLink to='#'>My work</NavLink>
                        <NavLink to='#'>My skills</NavLink>
                        <NavLink to='#'>Hire Me</NavLink>
                    </LinksContainer>
                </Content>
            </Container>
            
            <FooterDiv>
                <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="240" width="120" height="120" rx="23" fill="#5D00D7" fill-opacity="0.91"/>
                    <rect x="120" y="120" width="120" height="120" rx="23" fill="white"/>
                    <rect x="240" y="240" width="120" height="120" rx="23" fill="white"/>
                    <rect y="240" width="120" height="120" rx="23" fill="white" fill-opacity="0.4"/>
                    <circle cx="300" cy="180" r="60" fill="#FF64CB"/>
                    <circle cx="180" cy="300" r="60" fill="#E8DEED"/>
                </svg>
            </FooterDiv>
            
            


                         
        </FooterSection>
    )
}

export default Footer
