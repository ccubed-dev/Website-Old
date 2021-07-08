import styled from "styled-components";


export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default FlexRow;