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
`;

const SubText = styled.p`
	margin-block-start: 0em;
	margin-block-end: 0em;
`;


const MetricsCounter = () => {
    return (
        <FlexColumn>
            <Header>hello test</Header>
            <SubText>test number 2</SubText>	
        </FlexColumn>
    );
};

export default MetricsCounter;
