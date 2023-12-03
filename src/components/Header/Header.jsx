import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation } from 'styles/App.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Your App</Logo>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Cars</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
