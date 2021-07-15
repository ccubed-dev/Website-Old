import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, Card, FlexRow, FlexColumn} from "@atoms";

const Container = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 2em;
	width: 60%;

    @media screen and (max-width: 1000px) {
        width:80%;
    }

    //centers
    margin-left: auto;
    margin-right: auto;

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
`;

const SubHeader = styled.h1`
    font-size: 1.5em;
    color: white;
`;

const ButtonContainer = styled(FlexRow)`
    width: 100%;
    text-align: center;
    display: inline;

`;

function MetricsBar() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft());
        });

        return () => clearTimeout(timer);
    });

    return (
        <Container>
            <CountDownContainer>
                <NumberContainer>
                    <Header>{timeLeft.days}</Header>
                    <SubHeader>Days</SubHeader>
                </NumberContainer>

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
            </CountDownContainer>

            <ButtonContainer>
                <Button>Register</Button>
            </ButtonContainer>
        </Container>
    );
}

export default MetricsBar;

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