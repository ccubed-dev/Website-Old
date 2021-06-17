import React from "react";
import styled from "styled-components";
import {FlexRow, HeaderLink} from "@atoms";
import {pages} from "@constants";

const Container = styled(FlexRow)`
    height: 5em;
    border-radius: 1px;
    padding-right: 5em;

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