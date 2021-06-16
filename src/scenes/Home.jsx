import React from "react";
import {PageContainer} from "@atoms";
import {Greeter} from "@molecules";
import {Header} from "@organisms";
import MetricsBar from "src/components/molecules/MetricsBar";

function Home() {
    return (
        <PageContainer>
            <Header></Header>
            <Greeter></Greeter>
            <MetricsBar></MetricsBar>
        </PageContainer>
    );
}

export default Home;