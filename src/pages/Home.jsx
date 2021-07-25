import React from "react";
import styled from "styled-components";

import { PageContainer } from "@atoms/layout";
import { Greeter, CountDownBar, SocialMediaBar } from "@molecules";
import { Header } from "@organisms";
import Wallpaper from "@resources/images/wallpaper.jpg";
import { useMediaPredicate } from "react-media-hook";

const HomeContainer = styled(PageContainer)`
    /* background-image: url(${Wallpaper});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 1000px) {
        background-size: cover;
    } */
    background-color: transparent;
`;

const SocialMediaIconsDiv = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`;


function Home() {
    const isMobile = useMediaPredicate("(max-width: 1180px)");
    return (
        <HomeContainer>
            
            {/* <Header /> */}
            <Greeter />
            <br></br>
            <br></br>
            <CountDownBar/>
            {
                isMobile ?
                    <></>
                    :
                    <SocialMediaIconsDiv>
                        <SocialMediaBar></SocialMediaBar>
                    </SocialMediaIconsDiv>
            }
        </HomeContainer>
    );
}

export default Home;