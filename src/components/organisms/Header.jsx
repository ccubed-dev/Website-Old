import React from "react";
import styled from "styled-components";
import {HeaderLink} from "@atoms";

const Container = styled.div`
	background-color: ${props => props.theme.colors.darkerBlue};
    align-content: left;
    box-shadow: 
        0px 
        ${props => props.theme.shadows.elevations.low} 
        ${props => props.theme.shadows.blur} 
        ${props => props.theme.colors.shadow};
`;

const pagesList = [
    "Home",
    "About",
    "Contact",
    "Meet the Team"
];

function Header() {
    return (
        <Container >
            {
                pagesList.map((page) => (
                    <HeaderLink key={page} text={page} url={`/${page}`}/>
                ))
            }
        </Container>
    );

}

export default Header;