import React from "react";
import Router from "@routes";
import { Theme } from "@styles";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "@atoms";

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <AppContainer>
                    <Router/>
                </AppContainer>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
