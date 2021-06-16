import React from "react";
import styled from "styled-components";
import Logo from "@resources/images/ccubed_logo.svg";

const Img = styled.img`
    display: inline-block;
    height: 28vmin;

    transition-property: height;
    transition-duration: ${props => props.theme.transitions.logo};

    &:hover {
		border-radius: 1.25em;
		transition-timing-function: ease;
		height: 31vmin;
    }

`;

// eslint-disable-next-line react/prop-types
const AppLogo = () => (
    <Img src={Logo}></Img>
);

export default AppLogo;