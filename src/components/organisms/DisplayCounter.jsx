import React from "react";
import styled from "styled-components";
import { FlexColumn } from "@atoms/layout";
import PropTypes from "prop-types";

const NumberContainer = styled(FlexColumn)`
    align-items: center;
`;

const Header = styled.h1`
    font-size: 4em;
    color: white;

    cursor: default;
    text-align: center;
    margin: 0.1em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #1A384c;
`;

const SubHeader = styled.h1`
    font-size: 1.5em;
    color: white;
    cursor: default;
`;

function DisplayCounter({ header, subHeader}) {
    return (
        <NumberContainer>
            <Header>{header}</Header>
            {
                !!subHeader && <SubHeader>{subHeader}</SubHeader>
            }
        </NumberContainer>
    );
}

DisplayCounter.defaultProps = {
    subHeader: false,
};

DisplayCounter.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
};

export default DisplayCounter;
