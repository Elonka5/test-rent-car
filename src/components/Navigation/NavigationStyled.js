import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 6px;
`;

export const StyledLinkNav = styled(NavLink)`
  color: var(--skyblue);
  border-radius: 8px;
  padding: 8px 9px;
  font-size: 13px;
  line-height: 1.4;
  cursor: pointer;

  &.active {
    background-color: var(--skyblue);
    color: var(--white);
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
