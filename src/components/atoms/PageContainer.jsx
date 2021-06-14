import styled from "styled-components";
import {FlexColumn} from "@atoms";

const PageContainer = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  align-items: center;
  align-content: center;

  background-color: ${props => props.theme.colors.background};
`;

export default PageContainer;