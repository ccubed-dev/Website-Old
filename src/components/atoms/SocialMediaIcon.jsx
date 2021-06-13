import React from "react";
import {CircularButton} from "@atoms";
import styled from "styled-components";

//circular button that contains an image
const Icon = styled.i`
    color: white;
    font-size: ${props => props.theme.fontSizes.socialMediaIcon};
`;

const Link = styled.a`
    text-decoration: none;
`;

// eslint-disable-next-line react/prop-types
const SocialMediaIcon = ({href, icon}) => {
    return (
        <Link href={href} target="_blank" rel="noreferrer">
            <CircularButton>
                <Icon className={`fab ${icon}`}></Icon>
            </CircularButton>
        </Link>
    );
};

export default SocialMediaIcon;
