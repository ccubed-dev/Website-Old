import React from "react";
import styled from "styled-components";
import {Button,Card,FlexRow} from "@atoms";

const Container = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 2em;
	width: 60%;
    /* height: 20%; */

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

const Header = styled.h1`
    font-size: 4em;
    color: white;
`;

const SubHeader = styled.h1`
    font-size: 1.5em;
    color: white;
`;
const ButtonContainer = styled(FlexRow)`
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
`;

export default function MetricsBar() {
    return (
        <Container>
            <CountDownContainer>
                <Header>10</Header>
                <Header>:</Header>
                <Header>00</Header>
                <Header>:</Header>
                <Header>00</Header>
                <Header>:</Header>
                <Header>00</Header>
            </CountDownContainer>
            <CountDownContainer>
                <SubHeader>Days</SubHeader>
                <SubHeader>Hours</SubHeader>
                <SubHeader>Minutes</SubHeader>
                <SubHeader>Seconds</SubHeader>
            </CountDownContainer>
            <ButtonContainer>
                <Button>Register</Button>
            </ButtonContainer>
        </Container>
    );
}