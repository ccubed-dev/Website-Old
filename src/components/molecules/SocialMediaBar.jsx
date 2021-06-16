import React from "react";
import {SocialMediaIcon} from "@atoms";
import styled from "styled-components";
import {socialMedias} from "@constants";

const Container = styled.div`
	display: inline-block;
    margin: 1em;
`;

// eslint-disable-next-line react/prop-types
const SocialMediaBar = () => {
    return (
        <Container>
            {
                socialMedias.map((social) => (
                    <SocialMediaIcon href={social.link} icon={`fa-${social.name}`} key={social.name}></SocialMediaIcon>
                ))
            }
        </Container>
    );
};

export default SocialMediaBar;
