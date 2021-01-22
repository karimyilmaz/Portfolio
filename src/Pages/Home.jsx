import React from 'react'
import styled, {css} from 'styled-components'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Skills from '../Components/Skills'
import Footer  from '../Components/Footer'

import elixi from '../Images/elixi.PNG'
import papa from '../Images/papadapulos.PNG'
import cappa from '../Images/travel_cappadocia.PNG'

const HomeContainer = styled.div`
    width: 100%;
    height: 100%; 
`
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
const FeaturedContainer = styled.div`
    /* position: relative; */
    /* top: 95%; */
    margin-top: 50%;
`
const FeaturedContainerInner = styled.div`
    height: 100px;
`
const HireMe = styled.div`
    margin-top: 35%;
    display: flex;
    justify-content: center;

    span{
        color: #5D00D7;
        margin-left: 10px;
    }

`


const Home = () => {
    return (
        <HomeContainer>
           <Navbar/>
            <Hero/>
            <Container>
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
            
            <HireMe><h1>Like What you See?<span>Hire Me</span></h1></HireMe>
            <Footer></Footer>                   
        </HomeContainer>
    )
}

export default Home
