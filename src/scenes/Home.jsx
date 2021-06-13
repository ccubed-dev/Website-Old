import React from "react";
import {PageContainer} from "@atoms";
import {Header} from "@organisms";
import {SocialMediaBar} from "@molecules";

function Home() {
    
    return (
        <PageContainer>
            <Header></Header>
            <SocialMediaBar></SocialMediaBar>
        </PageContainer>
    );
}

export default Home;