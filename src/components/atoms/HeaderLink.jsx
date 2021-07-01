import React from "react";
import styled from "styled-components";

const Link = styled.a`
	color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSizes.medium};
    
    text-decoration: none;
   
    padding: 0.5em;
    padding-top: 1.3em;
    padding-right: 1em;
    padding-left: 1em;

	transition-duration: ${props => props.theme.transitions.link};
	transition-timing-function: ease;
    

    &:hover {
        color: ${props => props.theme.colors.orange};
        border-bottom: 2px solid ${props => props.theme.colors.orange};
    }
`;

// eslint-disable-next-line react/prop-types
function HeaderLink({text, url}) {
    return (
        <Link href={url}>{text}</Link>
    );
}

export default HeaderLink;