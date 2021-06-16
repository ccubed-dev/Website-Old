import React from "react";
import styled from "styled-components";
import {AppLogo, FlexRow} from "@atoms";
import {SocialMediaBar} from "@molecules";
import {FadeIn, SlideLeft} from "@animations";

const Container = styled.div`
    display: block;
	width:100%;
`;

const Centerer = styled.div`
    width: fit-content;
    text-align: center;
`;

const TextContainer = styled.div`
    /* position: relative; */
    width: 40%;
    text-align: center;
    justify-content: center;
`;

const Greeter = () => {
    return (
        <Container>
            <FlexRow>
                <SlideLeft delay="0.5s">
                    <Centerer>
                        <AppLogo></AppLogo>
                        <br></br>
                        <SocialMediaBar></SocialMediaBar>
                    </Centerer>
                </SlideLeft>
                <TextContainer>
                    <FadeIn delay="2.5s" duration="1s">
                        <h1>
                            Hi! Were CCubed
                        </h1>
                        <p>
                            Connect Inspire Support
                        </p>
                    </FadeIn>
                </TextContainer>
            </FlexRow>
        </Container>
    );
};

export default Greeter;
