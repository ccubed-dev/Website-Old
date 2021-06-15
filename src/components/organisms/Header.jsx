import React from "react";
import styled from "styled-components";
import {FlexRow, HeaderLink} from "@atoms";
import {pages} from "@constants";

const Container = styled(FlexRow)`
    height: 4em;
    width: 100%;
    border-radius: 1px;
    padding-right: 6em;

	background-color: ${props => props.theme.colors.darkestBlue};
    box-shadow: 0px ${props => props.theme.shadows.elevations.low} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};

    align-content: center;
    justify-content: flex-end;

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