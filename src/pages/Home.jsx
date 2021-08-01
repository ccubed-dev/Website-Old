import React from "react";
import styled from "styled-components";

import { PageContainer, FlexRow } from "@atoms/layout";
import { Greeter, CountDownBar, SocialMediaBar } from "@molecules";

import { useMediaPredicate } from "react-media-hook";
import RegistrationButton from "@atoms/buttons/RegistrationButton";

const HomeContainer = styled(PageContainer)`
    background-color: transparent;
`;

const ButtonContainer = styled(FlexRow)`
    width: 100%;
    justify-content: center;
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
            <br />
            <br />
            <CountDownBar/>

            <ButtonContainer>
                <RegistrationButton/>
            </ButtonContainer>

            <SocialMediaSection/>
        </HomeContainer>
    );
}

export default Home;
