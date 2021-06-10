import React from 'react'
import logo from '@images/logo.svg';
import { HeaderLink, AppContainer, AppHeader, AppLogo, Test } from '@atoms'
import {Header} from '@organisms'
import '../styles/App.css';

function Home() {
    return (
        <AppContainer>
            <Header></Header>
        </AppContainer>
    );
}

export default Home;