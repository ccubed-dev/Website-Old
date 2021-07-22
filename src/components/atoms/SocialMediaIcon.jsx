import React from "react";
import { CircularButton } from "@atoms/buttons";
import styled from "styled-components";

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
            <Link href={href} target="_blank" rel="noreferrer">
                <Icon className={`fab ${icon}`}></Icon>
            </Link>
        </CircularButton>
    );
};

export default SocialMediaIcon;
