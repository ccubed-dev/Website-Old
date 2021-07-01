import React from "react";
import styled from "styled-components";
import {PageContainer} from "@atoms";
import {Greeter, MetricsBar, SocialMediaBar} from "@molecules";
import {Header} from "@organisms";
import Wallpaper from "@resources/images/CCubedWallpaper.jpg";

const HomeContainer = styled(PageContainer)`
    background-image: url(${Wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
`;

const SocialMediaIconsDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;


function Home() {
    return (
        <HomeContainer>
            <Header />
            <Greeter />
            {/* <MetricsBar></MetricsBar> */}
            <SocialMediaIconsDiv>
                <SocialMediaBar></SocialMediaBar>
            </SocialMediaIconsDiv>
        </HomeContainer>
    );
}

export default Home;