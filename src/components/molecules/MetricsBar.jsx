import React from "react";
import styled from "styled-components";
import {Card, MetricsCounter} from "@atoms";
import {metrics} from "@constants";

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
            {
                metrics.map((metric) => (
                    <MetricsCounter amount={metric.amount} name={metric.name} key={metric.name}></MetricsCounter>
                ))
            }
        </Container>
    );
}
