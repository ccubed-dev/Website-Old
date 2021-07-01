import React from "react";
import styled from "styled-components";
import {AppLogo, FlexRow} from "@atoms";

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
    width: 100%;
    text-shadow: 2px 2px 5px black;
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
        <Test>
            <Centerer>
                <AppLogo></AppLogo>
            </Centerer>
            <TextContainer>
                <Header>
                            Computing Councils of Canada
                </Header>
                <SubHeader>
                            Connect Inspire Support
                </SubHeader>
            </TextContainer>
        </Test>
    );
};

export default Greeter;
