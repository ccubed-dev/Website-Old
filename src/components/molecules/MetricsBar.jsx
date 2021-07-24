import React from "react";
import styled from "styled-components";

import { MetricsCounter } from "@atoms";
import { metrics } from "@constants";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 2em;
	width: 60%;

    margin-left: auto;
    margin-right: auto;
`;

function MetricsBar() {
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

export default MetricsBar;
