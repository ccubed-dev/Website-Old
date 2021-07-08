import React from "react";
import styled from "styled-components";
import {AppLogo, FlexRow} from "@atoms";
import { useMediaPredicate } from "react-media-hook";


const GreeterContainer = styled(FlexRow)`
    align-content: center;
    justify-content: center;
`;

const AppLogoContainer = styled.div`
    width: 20%;
    text-align: center; 

    @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: center; 
    }
`;

const TextContainer = styled.div`
    width: 40%;
    font-size: 3.5em;
    margin: 2vw;    

    justify-content: center;
    color: white;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: center; 
    }
`;

const Header = styled.h1`
    width: 50vw;

    font-size: 100%;
    width: 100%;
    text-shadow: 2px 2px 5px black;
    font-family: ${props => props.theme.fonts.title};
    
`;

const SubHeader = styled.h2`
    font-size: 50%;
    font-family: ${props => props.theme.fonts.title};
    font-weight: 200;

`;

const Greeter = () => {
    const isMobile = useMediaPredicate("(max-width: 1000px)");

    return (
        <GreeterContainer>
            <AppLogoContainer>
                <AppLogo></AppLogo>
            </AppLogoContainer>
            <TextContainer>
                <Header>
                    {isMobile ? "CCubed" : "Computing Councils of Canada"}
                </Header>
                <SubHeader>
                    {"Connect Inspire Support"}
                </SubHeader>
            </TextContainer>
        </GreeterContainer>
    );
};

export default Greeter;
