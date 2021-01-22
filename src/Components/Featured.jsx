import React from 'react'
import styled, {css} from 'styled-components'


const FeaturedSection = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 120px);
    height: 100%;
    padding: ${(props) => (props.reversed ? '3em 0 6em 0;': '3em 0 0 6em;')} 
    
    /* padding: 3em 0 6em 0; */
    /* padding-right: 6em; */
    /* padding-right: 6em;  */


    
    ${(props) => (!props.reversed && props.showCircle && css`&::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 280px;
        width: 280px;
        border-radius: 50%;
        background: #5D00D7;
        opacity: 0.3;
        z-index: -1;
        }`
    )}
    

`
const FeaturedContent = styled.div`
    width: 35%;
    margin-left: ${(props) => (props.reversed? 'auto': '0')};
    /* margin-right: 6em; */
    line-height: 150%;
    padding-top: 3.5em;
`
const SmHeading = styled.div`
    font-weight: bold;
    font-size: .9em;
    color: #5D00D7;
    opacity: 0.9;
    letter-spacing: 15px;

`
const Heading2 = styled.h2``

const Paragraph = styled.p`
    font-size: .8em;
    font-weight: 300;
    line-height:40px;
`  
const Image = styled.img`
    position: absolute;
    border-radius: 2%;
    width: 790px;
    height: 450px;

    ${(props) => (props.reversed && css`right: 48%; ` )}
    ${(props) => (!props.reversed && css`left: 48%; ` )}    

`

    


const Featured = ({reversed, showCircle, smheading, heading2, paragraph, source}) => {
    return(
        <FeaturedSection reversed={reversed} showCircle={showCircle}>
            <FeaturedContent reversed={reversed}>
                <SmHeading>{smheading}</SmHeading>
                <Heading2>{heading2}</Heading2>
                <Paragraph>{paragraph}</Paragraph>
            </FeaturedContent>
            <Image reversed={reversed} src={source}></Image>
            
        </FeaturedSection>
    )
}

export default Featured 
