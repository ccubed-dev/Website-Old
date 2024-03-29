import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        orange: "#F7AB3B",
        red: "#EA5133",
        darkerBlue: "#1A384C",
        darkestBlue: "#132a3a",
        darkBlue: "#1E889630",
        primaryButton: "#1A384C90",
        blue: "#33BAC5",
        hoverBlue: "#2eabb6",
        clickBlue: "#26c1cf",
        lightBlue: "#C6E3D2",
        shadow: "#1A384C40",
        background: "#fafafa",
    },
    fonts: {
        title: "PT Sans",
        text: "Roboto",


    },
    fontSizes: {
        small: "1em",
        medium: "1.25em",
        large: "3em",
        header: "4em",
        subHeader: "2em",
        socialMediaIcon: "2em"
    },
    transitions: {
        link: "0.25s",
        button: "0.35s",
        logo: "0.5s",
    },
    shadows: {
        blur: "2px",
        elevations: {
            low: "1px",
            med: "5px",
            high: "15px"
        }
    }
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;