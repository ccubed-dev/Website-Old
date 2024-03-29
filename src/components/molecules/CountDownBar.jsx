import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Card } from "@atoms";
import { FlexRow } from "@atoms/layout";
import { DisplayCounter } from "@organisms";
import { useMediaPredicate } from "react-media-hook";

const NEXT_EVENT_YEAR = 2021;
const NEXT_EVENT_MONTH = 8;
const NEXT_EVENT_DAY = 25;
const NEXT_EVENT_HOUR = 0;

const NEXT_EVENT_DATE = new Date(NEXT_EVENT_YEAR, NEXT_EVENT_MONTH, NEXT_EVENT_DAY, NEXT_EVENT_HOUR, 0, 0, 0);

function getTimeLeft() {
    let timeLeft = new Date(NEXT_EVENT_DATE - new Date());
    let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    timeLeft %= (24 * 60 * 60 * 1000);

    let hours = Math.floor(timeLeft / (60 * 60 * 1000));
    timeLeft %= (60 * 60 * 1000);

    let minutes = Math.floor(timeLeft / (60 * 1000));
    timeLeft %= (60 * 1000);

    let seconds = Math.floor(timeLeft / 1000);
    return { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
}

const Container = styled(Card)`
	  display: flex;
	  flex-direction: column;
	  padding: 2em;
	  width: 60%;

    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 1180px) {
        width:80%;
    }
`;

const CountDownContainer = styled(FlexRow)`
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
`;

const EventTitle = styled.h1`
    font-size: 4em;
    color: white;

    cursor: default;
    text-align: center;
    margin: 0.1em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
    
    font-size: 4.2em;
    text-shadow: 1px 1px 8px black;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
`;

function MetricsBar() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const isMobile = useMediaPredicate("(max-width: 1180px)");

    useEffect(() => {
        const timer = setTimeout( function() { setTimeLeft(getTimeLeft()); } );
        return function() { clearTimeout(timer); };
    });

    return (
        <Container>
            <EventTitle>
                C<sup>3</sup> Con
            </EventTitle>
            <CountDownContainer>
                <DisplayCounter header={timeLeft.days} subheader={"Days"} />
                {
                    !isMobile &&
                    <>
                        <DisplayCounter header={":"} />
                        <DisplayCounter header={timeLeft.hours} subheader={"Hours"} />
                        <DisplayCounter header={":"} />
                        <DisplayCounter header={timeLeft.minutes} subheader={"Minutes"} />
                        <DisplayCounter header={":"} />
                        <DisplayCounter header={timeLeft.seconds} subheader={"Seconds"} />
                    </>
                }
            </CountDownContainer>
        </Container>
    );
}

export default MetricsBar;
