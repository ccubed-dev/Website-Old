import React from "react";
import styled from "styled-components";
import Logo from "@resources/images/ccubed_logo.svg";

const Img = styled.img`
    display: inline-block;
    /* height: 90%; */
    width: 90%;

    transition-property: width;
    transition-duration: ${props => props.theme.transitions.logo};
    transition-timing-function: ease;

    /* &:hover {
      width: 100%;
    } */

    @media screen and (max-width: 1000px) {
        width: 50%;

      /* &:hover {
        width: 60%;
      } */
    }
`;

// eslint-disable-next-line react/prop-types
const AppLogo = () => (
    <Img src={Logo}></Img>
);

export default AppLogo;