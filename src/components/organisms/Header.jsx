import React from "react";
import styled from "styled-components";
import { useMediaPredicate } from "react-media-hook";

import { HeaderLink } from "@atoms";
import { FlexRow } from "@atoms/layout";

import { pages } from "@constants";
import { slide as Menu } from "react-burger-menu";

const Container = styled(FlexRow)`
    height: 5em;
    border-radius: 1px;
    padding-right: 5em;

    align-content: center;
    justify-content: flex-end;
`;

var styles = {
    bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "36px",
        top: "36px"
    },
    bmBurgerBars: {
        background: "white"
    },
    bmBurgerBarsHover: {
        background: "#a90000"
    },
    bmCrossButton: {
        height: "24px",
        width: "24px"
    },
    bmCross: {
        background: "#bdc3c7"
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%"
    },
    bmMenu: {
        background: "#373a47",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em"
    },
    bmMorphShape: {
        fill: "#373a47"
    },
    bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em"
    },
    bmItem: {
        // display: "inline-block"
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
    }
};

function Header() {
    const isMobile = useMediaPredicate("(max-width: 1180px)");
    return (
        <>
            {
                isMobile ?
                    <Menu styles={styles} >
                        {
                            pages.map((page) => (
                                <a key={page} className="bmItem" text={page} href={`/${page}`}>{page}</a>
                            ))
                        }
                    </Menu>
                    :
                    <Container >
                        {
                            pages.map((page) => (
                                <HeaderLink key={page} text={page} url={`/${page}`} />
                            ))

                        }
                    </Container>
            }
        </>
    );
}

export default Header;
