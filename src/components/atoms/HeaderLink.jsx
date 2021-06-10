import styled from 'styled-components';
import Theme from '@styles';

const Link = styled.a`
	color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSizes.medium};
    padding: 0.5em;
    text-decoration: none;
`

function HeaderLink({text, url}) {
    return (
		<Link href={url}>{text}</Link>
    );
}

export default HeaderLink