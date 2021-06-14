import React from "react";
import styled from "styled-components";

const Img = styled.img`
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
const AppLogo = ({ src }) => (
    <Img src={src}></Img>
);

export default AppLogo;