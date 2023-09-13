import {
    StyledNavbarContainer,
    Title,
    NavButton,
    LoginButton,
    ButtonContainer,
} from './Navbar.styled.tsx';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <StyledNavbarContainer>
            <Title>BOOKIFY</Title>
            <ButtonContainer>
                <Link to={`#`}>
                    <NavButton>
                        about us
                    </NavButton>
                </Link>
                <Link to={`#`}>
                    <NavButton>
                        your favourites
                    </NavButton>
                </Link>
                <Link to={`#`}>
                    <NavButton>
                        start hosting
                    </NavButton>
                </Link>
                <Link to={`#`}>
                    <LoginButton>
                        login
                    </LoginButton>
                </Link>
            </ButtonContainer>
        </StyledNavbarContainer>
    );
};
