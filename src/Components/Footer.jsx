import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import footerDesign from '../Images/footer-design.svg'

const FooterSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 66% auto;
    width: 100%;
    background: #6E00FF;
    height: 300px;

    svg{
        margin-bottom: -120%;
        width: 100%;
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
`

const Logo = styled(Link)`
    color: #00F7FF;
    font-weight: 700;
    font-size: 47px;
    text-decoration: none;
`
const LinksContainer = styled.div`
    display: flex;
    margin-right: 3em;
`
const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: .8em;
    color: #fff;
    padding: 0em .9em;   
`
const FooterDesign = styled.img`
 position: absolute;
 right: 5%;
 bottom: 3em;
 width: 25%;
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
            <FooterDesign src={footerDesign}></FooterDesign>
            


                         
        </FooterSection>
    )
}

export default Footer
