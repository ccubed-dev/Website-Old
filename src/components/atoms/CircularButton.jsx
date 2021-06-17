import React from "react";
import styled from "styled-components";

const ButtonCircle = styled.div`
	border-radius: 3em;
	height: 3.5em;
	width: 3.5em;
	margin: 0.5em;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
	
	background-color: ${props => props.theme.colors.darkBlue};
    
	transition-property: border-radius, background-color, box-shadow, height, width;
	transition-duration: ${props => props.theme.transitions.link};
	transition-timing-function: ease;

    &:hover {
		border-radius: 1.4em;
        background-color: ${props => props.theme.colors.orange};
		box-shadow: 0px ${props => props.theme.shadows.elevations.low} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};
		transition-timing-function: ease;
		cursor: pointer;
		height: 3.6em;
		width: 3.6em;
		/* margin: 0.3em; */
    }

	&:active {
        background-color: ${props => props.theme.colors.blue};
		box-shadow: 0px ${props => props.theme.shadows.elevations.med} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};
		transition-timing-function: ease;
	}
`;

// eslint-disable-next-line react/prop-types
const CircularButton = ({children, onClick}) => {
    return (
        <ButtonCircle onClick={onClick}>
            {children}
        </ButtonCircle>
    );
};

export default CircularButton;
