import React from "react";
import styled from "styled-components";
import Logo from "@resources/images/ccubed_logo.svg";

const Img = styled.img`
    display: inline-block;
    height: 100%;
    width: 100%;

    transition-property: height;
    transition-duration: ${props => props.theme.transitions.logo};

    &:hover {
		/* border-radius: 1.25em; */
		transition-timing-function: ease;
		height: 21em;
    }

    @media screen and (max-width: 1000px) {
        height: 16em;

        &:hover {
          height: 18em;
        }
    }
`;

// eslint-disable-next-line react/prop-types
const AppLogo = () => (
    <Img src={Logo}></Img>
);

export default AppLogo;