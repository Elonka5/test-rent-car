import Navigation from 'components/Navigation/Navigation';
import logo from '../../images/Untitled__1_-removebg (1).png';
import { ContainerHeader, HeaderWrap, Logo } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderWrap>
      <ContainerHeader>
        <Logo src={logo} alt="logo" />
        <Navigation />
      </ContainerHeader>
    </HeaderWrap>
  );
};

export default Header;
