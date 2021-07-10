import React from "react";
import styled from "styled-components";
import {FlexRow, HeaderLink} from "@atoms";
import {pages} from "@constants";
import { slide as Menu } from "react-burger-menu";
import { useMediaPredicate } from "react-media-hook";

const Container = styled(FlexRow)`
    height: 5em;
    border-radius: 1px;
    padding-right: 5em;

    align-content: center;
    justify-content: flex-end;
`;


function Header() {
    const isMobile = useMediaPredicate("(max-width: 1000px)");
    return (
        <>
            {
                isMobile ?
                    <Menu width={"40%"}>
                        {
                            pages.map((page) => (
                                <a key={page} className="menu-item" text={page} href={`/${page}`}>{page}</a>
                            ))

                        }
                    </Menu>
                    :
                    <Container >
                        {
                            pages.map((page) => (
                                <HeaderLink key={page} text={page} url={`/${page}`}/>
                            ))

                        }
                    </Container>
            }
        </>
    );

}

export default Header;