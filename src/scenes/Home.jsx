import React from "react";
import {AppLogo, PageContainer} from "@atoms";
import {MetricsBar, SocialMediaBar} from "@molecules";
import {Header} from "@organisms";

function Home() {
    
    return (
        <PageContainer>
            <Header></Header>
            <AppLogo></AppLogo>
            <SocialMediaBar></SocialMediaBar>
            <MetricsBar></MetricsBar>
        </PageContainer>
    );
}

export default Home;