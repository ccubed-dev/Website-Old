import React from "react";
import styled from "styled-components";

import { Card } from "@atoms";
import { FlexRow, FlexColumn } from "@atoms/layout";
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

const NumberContainer = styled(FlexColumn)`
    align-items: center;

`;

const Header = styled.h1`
    font-size: 4em;
    color: white;

    cursor: default;
    text-align: center;
    margin: 0.1em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
`;

const EventTitle = styled(Header)`
    font-size: 4.2em;
    text-shadow: 1px 1px 8px black;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
`;

const SubHeader = styled.h1`
    font-size: 1.5em;
    color: white;

    cursor: default;
`;

function MetricsBar() {
    const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());
    const isMobile = useMediaPredicate("(max-width: 1180px)");

    React.useEffect(() => {
        const timer = setTimeout( function() { setTimeLeft(getTimeLeft()); } );
        return function() { clearTimeout(timer); };

    } );

    return (
        <Container>
            <EventTitle>
                C<sup>3</sup> Con
            </EventTitle>
            <CountDownContainer>
                <NumberContainer>
                    <Header>{timeLeft.days}</Header>
                    <SubHeader>Days</SubHeader>
                </NumberContainer>

                {
                    !isMobile && <>
                        <NumberContainer>
                            <Header>:</Header>
                        </NumberContainer>

                        <NumberContainer>
                            <Header>{timeLeft.hours}</Header>
                            <SubHeader>Hours</SubHeader>
                        </NumberContainer>

                        <NumberContainer>
                            <Header>:</Header>
                        </NumberContainer>

                        <NumberContainer>
                            <Header>{timeLeft.minutes}</Header>
                            <SubHeader>Minutes</SubHeader>
                        </NumberContainer>

                        <NumberContainer>
                            <Header>:</Header>
                        </NumberContainer>

                        <NumberContainer>
                            <Header>{timeLeft.seconds}</Header>
                            <SubHeader>Seconds</SubHeader>
                        </NumberContainer>
                    </>
                }
            </CountDownContainer>
        </Container>
    );
}

export default MetricsBar;
