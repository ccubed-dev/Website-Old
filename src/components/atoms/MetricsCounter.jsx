import React from "react";
import styled from "styled-components";
// import {FlexColumn} from "@atoms";

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.h1`
	margin-block-start: 0em;
	margin-block-end: 0em;
	color: ${props => props.theme.colors.darkBlue};
	font-size: ${props => props.theme.fontSizes.header};
`;

const SubText = styled.p`
	margin-block-start: 0em;
	margin-block-end: 0em;
	color: ${props => props.theme.colors.darkerBlue};
	font-size: ${props => props.theme.fontSizes.subHeader};
`;


// eslint-disable-next-line react/prop-types
const MetricsCounter = ({amount, name}) => {
    return (
        <FlexColumn>
            <Header>{amount}</Header>
            <SubText>{name}</SubText>	
        </FlexColumn>
    );
};

export default MetricsCounter;
