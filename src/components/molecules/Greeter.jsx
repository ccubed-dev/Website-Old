import React from "react";
import styled from "styled-components";
import {AppLogo, FlexRow} from "@atoms";
import {SlideLeft} from "@animations";

const Container = styled.div`
    display: block;
	width:100%;
    height: 100%;
`;

const Centerer = styled.div`
    width: fit-content;
    text-align: center;
`;

const TextContainer = styled.div`
    width: 40%;
    justify-content: center;
    color: white;
    font-size: 3.5em;
    margin: 2vw;    
`;

const Header = styled.h1`
    font-size: 100%;
    /* height: 100%; */
    width: 100%;
`;

const SubHeader = styled.h2`
    font-size: 50%;
`;

const Test = styled(FlexRow)`
    align-content: center;
    justify-content: center;
`;

const Greeter = () => {
    return (
        <Container>
            <Test>
                <SlideLeft delay="0.5s">
                    <Centerer>
                        <AppLogo></AppLogo>
                    </Centerer>
                </SlideLeft>
                <TextContainer>
                    <Header>
                            Hi! Were CCubed
                    </Header>
                    <SubHeader>
                            Connect Inspire Support
                    </SubHeader>
                </TextContainer>
            </Test>
        </Container>
    );
};

export default Greeter;
