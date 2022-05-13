import React from "react";
import styled from "styled-components";

import { SocialMediaIcon } from "@atoms";
import { socialMedias } from "@constants";

const Container = styled.div`
	display: inline-block;
    margin: 1em;
`;

const SocialMediaBar = () => {
    return (
        <Container>
            {
                socialMedias.map((social) => <SocialMediaIcon href={social.link} icon={`fa-${social.name}`} key={social.name} />)
            }
        </Container>
    );
};

export default SocialMediaBar;
