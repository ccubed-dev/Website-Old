import styled from "styled-components"; 

const BaseAnimation = styled.div`  
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingFunction};      
  animation-delay: ${props => props.delay};  
  animation-iteration-count: ${props => props.iterationCount};  
  animation-direction: ${props => props.direction}; 
  animation-fill-mode: ${props => props.fillMode};  
  animation-play-state:  ${props => props.playState};  
  display: ${props => props.display};
  width: ${props => props.width};
`; 
BaseAnimation.defaultProps = {  
    duration: "2s",
    timingFunction: "ease",
    delay: "0s",
    iterationCount: "1",
    direction: "normal",
    fillMode: "both",
    playState: "running",
    display: "inline",
    width: "fit-content"
}; 
export default BaseAnimation;