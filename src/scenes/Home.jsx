import React from "react";
import {PageContainer} from "@atoms";
import {MetricsBar, SocialMediaBar} from "@molecules";
import {Header} from "@organisms";

function Home() {
    
    return (
        <PageContainer>
            <Header></Header>
            <SocialMediaBar></SocialMediaBar>
            <MetricsBar></MetricsBar>
        </PageContainer>
    );
}

export default Home;