import React from "react";
import styled from "styled-components";
import {HeaderLink} from "@atoms";
import {pages} from "@constants";

const Container = styled.div`
    height: 3em;

	background-color: ${props => props.theme.colors.darkestBlue};
    box-shadow: 0px ${props => props.theme.shadows.elevations.low} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};

    display: flex;
    align-content: center;
    justify-content: left;
`;


function Header() {
    return (
        <Container >
            {
                pages.map((page) => (
                    <HeaderLink key={page} text={page} url={`/${page}`}/>
                ))
            }
        </Container>
    );

}

export default Header;