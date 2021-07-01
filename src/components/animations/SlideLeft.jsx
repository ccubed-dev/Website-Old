import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation";

const SlideLeftAnimation = keyframes`    
  from {
    margin-left: 40% ;
    /* margin-right: 0%; */
  }
  to {
    margin-left: 15%;
  }
  /* 0% { margin-left: auto; margin-right: auto; }
  100% { margin-left: 0px; } */
`; 

const SlideLeft = styled(BaseAnimation)`
  animation-name: ${SlideLeftAnimation};
`; 

export default SlideLeft;