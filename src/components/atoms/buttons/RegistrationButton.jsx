import React from "react";
import styled from "styled-components";
import {PopupButton} from "@typeform/embed-react";

const StyledDiv = styled(PopupButton)`
	height: 3.0em;
	width: 10em;
	margin: 0.5em;

	border-radius: 0.5em;
    border-width: 0px;
	padding-left: 1.5em;
	padding-right: 1.5em;
	padding-top: 0em;

	font-size: 1.1em;
	font-weight: bold;
	color: white;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
	
	background-color: ${props => props.theme.colors.primaryButton};
    
	transition-property: border-radius, background-color, box-shadow, height, width;
	transition-duration: ${props => props.theme.transitions.link};
	transition-timing-function: ease;

    &:hover {
        background-color: ${props => props.theme.colors.orange};
		box-shadow: 0px ${props => props.theme.shadows.elevations.low} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};
		transition-timing-function: ease;
		cursor: pointer;
    }

	&:active {
        background-color: ${props => props.theme.colors.blue};
		box-shadow: 0px ${props => props.theme.shadows.elevations.med} ${props => props.theme.shadows.blur} ${props => props.theme.colors.shadow};
		transition-timing-function: ease;
	}
`;

function RegistrationButton() {
    return (
        <StyledDiv id="xhawPo5I">
            Register Here!
        </StyledDiv>
    );
}



export default RegistrationButton;