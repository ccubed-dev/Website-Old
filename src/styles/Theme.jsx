import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        orange: "#F7AB3B",
        red: "#EA5133",
        darkerBlue: "#1A384C",
        darkBlue: "#1E8896",
        blue: "#33BAC5",
        lightBlue: "#C6E3D2",
    },

    fonts: {
        text: "Roboto",

    },
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;