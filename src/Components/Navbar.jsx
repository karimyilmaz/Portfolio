import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {FaLinkedinIn} from 'react-icons/fa'
import {DiGithubAlt} from 'react-icons/di'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import {TweenMax} from 'gsap'

const Nav = styled.nav`
    
    display: grid;
    grid-template-columns: 66% auto;
    width: 100%;
    height: 0px;

    @media(max-width: 1069px){
        grid-template-columns: 100%;

    }
`

const Container = styled.div`
    width: 100%;
    background: #5D00D7;
    display: flex; 
    
`
const Content = styled.div`
    display: flex;
    width: 100%;
    padding-left: 6em;
    justify-content: space-between;

    @media(max-width: 879px){
        padding-left: 4em;
    }

    @media(max-width: 666px){
        padding-left: 2em;
    }

    @media(max-width: 506px){
        padding-left: 1em;
    }

    @media(max-width: 414px){
        padding-left: .5em;
        padding-top: .5em;
    }
    
`

const Logo = styled(Link)`
    color: #00F7FF;
    font-weight: 700;
    font-size: 47px;
    text-decoration: none;
    display: flex;
    
    @media(max-width: 414px){
        font-size: 45px;
    }

    @media(max-width: 320px){
        font-size: 39px;
    }
`
const LinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    
    

    @media(max-width: 1069px){
        justify-content: flex-end;
        padding-right: 6em;

    }

    @media(max-width: 879px){
        padding-right: 4em;
    }

    @media(max-width: 666px){
        padding-right: 2em;
    }

    @media(max-width: 589px){
        width: 60%;
    }

    @media(max-width: 506px){
        padding-right: 1em;
    }

    @media(max-width: 414px){
        padding-right: .3em;
    }
`
const Lnk = styled.a`
    text-decoration: none;
    font-weight: 500;
    font-size: .8em;
    color: #fff;
    padding: 0em .9em;  
     
    @media(max-width: 546px){
        padding: 0em .3em;  
    }
    
    @media(max-width: 375px){
        font-size: .7em;  
    }
    
    @media(max-width: 320px){
        font-size: .6em;
    }

`


const SocialContainer = styled.div`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1069px){
        display: none;
    }
`

const LinkedIn = styled(FaLinkedinIn)`
    margin-right: 7px;
`

//DiGithubAlt, DiGithubFull
const Github = styled(DiGithubAlt)`
    margin-right: 7px;
`
const WhatsApp = styled(AiOutlineWhatsApp)``

const Navbar = () =>  {
    const navRef = useRef() 
    
    useEffect(() => {
        TweenMax.to(navRef.current, 1.2, {height: "80px"}) 
    }, [])

    return (
        <Nav ref={navRef}>
            <Container>
                <Content>
                    <Logo>Karim</Logo>
                    
                    <LinksContainer>
                        
                        <Lnk href="#work">My work</Lnk>
                        <Lnk href="#skills">My skills</Lnk>
                        <Lnk href="https://wa.me/96178839346" target="_blank" rel="noreferrer">Hire Me</Lnk>
                    </LinksContainer>
                </Content>
            </Container>
            <SocialContainer>
                <a href="https://www.linkedin.com/in/karim-sariddin-750940152/" target="_blank" rel="noreferrer"><LinkedIn/></a>
                <a href="https://github.com/karimyilmaz" target="_blank" rel="noreferrer"><Github/></a>
                <a href="https://wa.me/96178839346" target="_blank" rel="noreferrer"><WhatsApp/></a>
            </SocialContainer>
        </Nav>
    )
}

export default Navbar 
 