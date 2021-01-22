import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {FaLinkedinIn} from 'react-icons/fa'
import {DiGithubAlt, DiGithubFull} from 'react-icons/di'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Nav = styled.nav`
    
    display: grid;
    grid-template-columns: 66% auto;
    width: 100%;
    height: 80px;
`

const Container = styled.div`
    width: 100%;
    background: #5D00D7;
    display: flex; 
    
`

const Logo = styled(Link)`
    color: #00F7FF;
    font-weight: 700;
    font-size: 47px;
    text-decoration: none;
    display: flex;
    
`
const LinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: .5em;
`
const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: .8em;
    color: #fff;
    padding: 0em .9em;   
`

const Content = styled.div`
    display: flex;
    width: 100%;
    padding-left: 6em;
    justify-content: space-between;
`
const SocialContainer = styled.div`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
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
    return (
        <Nav>
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
            <SocialContainer>
                <a href="https://www.google.com/" target="_blank"><LinkedIn/></a>
                <a href="https://www.google.com/" target="_blank"><Github/></a>
                <a href="https://www.google.com/" target="_blank"><WhatsApp/></a>
            </SocialContainer>
        </Nav>
    )
}

export default Navbar 
 