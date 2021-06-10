import styled from 'styled-components';
import {HeaderLink} from '@atoms';

const Container = styled.div`
	background-color: ${props => props.theme.colors.darkerBlue};
    align-content: flex-start;
`

const pagesList = [
	"Home",
	"About",
    "Contact",
    "Meet the Team"
]

function Header() {
    return (
        <Container >
	{
                pagesList.map((page) => (
                    <HeaderLink text={page} url={`/${page}`}/>
                ))
        }
        </Container>
    );

}

export default Header