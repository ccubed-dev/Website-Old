import styled from "styled-components";

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;

    @media screen and (max-width: 1180px) {
        flex-direction: column;
    }
`;

export default FlexRow;