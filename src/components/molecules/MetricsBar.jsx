import React from "react";
import styled from "styled-components";
import {Card, MetricsCounter} from "@atoms";

const Container = styled(Card)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 2em;
	width: 60%;
`;

export default function MetricsBar() {
    return (
        <Container>
            <MetricsCounter></MetricsCounter>
            <MetricsCounter></MetricsCounter>
            <MetricsCounter></MetricsCounter>
        </Container>
    );
}
