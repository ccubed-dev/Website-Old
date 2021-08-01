import React from "react";
import styled from "styled-components";

import { CircularButton } from "@atoms/buttons";

const Icon = styled.i`
    color: white;
    font-size: ${props => props.theme.fontSizes.socialMediaIcon};
    position: relative;

`;

const Link = styled.a`
    text-decoration: none;

`;

// eslint-disable-next-line react/prop-types
const SocialMediaIcon = ({href, icon}) => {
    return (
        <CircularButton>
            <Link href={href} target="_blank">
                <Icon className={`fab ${icon}`} />
            </Link>
        </CircularButton>
    );
};

export default SocialMediaIcon;
