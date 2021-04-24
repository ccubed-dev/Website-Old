import React from 'react'
import logo from '@images/logo.svg';
import { AppContainer, AppHeader, AppLogo, Test } from '@atoms'
import '../styles/App.css';

function Home() {
    return (
        <AppContainer>
            <AppHeader>
                <AppLogo src={logo} />
                <Test />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </AppHeader>
        </AppContainer>
    );
}

export default Home;