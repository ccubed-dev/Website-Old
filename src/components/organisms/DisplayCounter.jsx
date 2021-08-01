import React from "react";
import styled from "styled-components";
import { FlexColumn } from "@atoms/layout";

const NumberContainer = styled(FlexColumn)`
    align-items: center;
`;

const Header = styled.h1`
    font-size: 4em;
    color: white;

    cursor: default;
    text-align: center;
    margin: 0.1em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
`;

const SubHeader = styled.h1`
    font-size: 1.5em;
    color: white;
    cursor: default;
`;


// eslint-disable-next-line react/prop-types
function DisplayCounter({ header, subheader = false}) {
    return (
        <NumberContainer>
            <Header>{header}</Header>
            {
                subheader && <SubHeader>{subheader}</SubHeader>
            }
        </NumberContainer>
    );
}

export default DisplayCounter;
