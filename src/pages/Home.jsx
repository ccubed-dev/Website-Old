import React from "react";
import styled from "styled-components";

import { PageContainer } from "@atoms/layout";
import { Greeter, SocialMediaBar } from "@molecules";
import { useMediaPredicate } from "react-media-hook";

const HomeContainer = styled(PageContainer)`
    background-color: transparent;
    display: inline-block;
    text-align: center;
`;

const Text = styled.p`
    color: white;
    font-size: 2em;
`;

const Link = styled.a`
    color: aqua;
`;

const SocialMediaIconsDiv = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`;

function Home() {
    const isMobile = useMediaPredicate("(max-width: 1180px)");
    const SocialMediaSection = function() {
        return !isMobile &&
          <SocialMediaIconsDiv>
              <SocialMediaBar/>
          </SocialMediaIconsDiv>;
    };

    return (
        <HomeContainer>
            <Greeter />
            <Text>
                {"Coming Soon..."}
                <br/>
                {"Follow us on our socials "}
                <Link href="https://linktr.ee/ccubed_dev" target="_blank" rel="noreferrer">
                    {"here"}
                </Link>
                {" for updates!"}
            </Text>
            <SocialMediaSection/>
        </HomeContainer>
    );
}

export default Home;
