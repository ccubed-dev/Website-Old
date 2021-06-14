import React from "react";
import logo from "../resources/images/ccubed_logo.svg";
import {AppLogo, PageContainer} from "@atoms";
import {Header} from "@organisms";
import {SocialMediaBar} from "@molecules";
import FlexColumn from "src/components/atoms/FlexColumn";

function Home() {
    
    return (
        <PageContainer>
            <Header></Header>
            <FlexColumn>
                <AppLogo src={logo}></AppLogo>
                <SocialMediaBar></SocialMediaBar>
            </FlexColumn>
        </PageContainer>
    );
}

export default Home;