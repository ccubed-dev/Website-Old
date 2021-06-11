import React from "react";
import styled from "styled-components";

const Link = styled.a`
	color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSizes.medium};
    padding: 0.5em;
    text-decoration: none;

    transition: color ${props => props.theme.transitions.link};

    &:hover {
        color: ${props => props.theme.colors.orange};
    }
`;

// eslint-disable-next-line react/prop-types
function HeaderLink({text, url}) {
    return (
        <Link href={url}>{text}</Link>
    );
}

export default HeaderLink;