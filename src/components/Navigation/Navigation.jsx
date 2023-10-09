import { Nav, StyledLinkNav } from './NavigationStyled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLinkNav to="/">Home</StyledLinkNav>
      <StyledLinkNav to="/catalog">Catalog</StyledLinkNav>
      <StyledLinkNav to="/favorites">Favorites</StyledLinkNav>
    </Nav>
  );
};

export default Navigation;
