import styled from 'styled-components';

const Img = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

const AppLogo = ({ src }) => {
    return (
        <Img src={src}></Img>
    )
}

export default AppLogo
