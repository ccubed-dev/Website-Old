import React from "react";
import styled from "styled-components";
import Icon from "@resources/images/icon.svg";

const Img = styled.img`
    display: inline-block;
    width: 90%;

    transition-property: width;
    transition-duration: ${props => props.theme.transitions.logo};
    transition-timing-function: ease;

    transition: all 0.25s ease;
    
    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        width: 50%;

    }
`;

function AppLogo() {
    return (
        <a href="/">
            <Img src={Icon}></Img>
        </a>
    );
}

export default AppLogo;