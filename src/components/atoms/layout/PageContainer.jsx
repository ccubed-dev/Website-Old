import styled from "styled-components";

const PageContainer = styled.div`
    display: block;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
`;

export default PageContainer;