import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FavoriteWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const EmptyFav = styled.img`
  width: 300px;
  height: 280px;

  @media only screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    width: 580px;
    height: 480px;
  }
`;

export const FavText = styled.p`
  color: var(--main-text);
  font-size: 28px;
  text-transform: uppercase;
  padding-left: 20px;

  @media only screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-size: 34px;
  }

  span {
    color: var(--skyblue);
  }
`;

export const ContainerFav = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkFav = styled(Link)`
  display: flex;
  width: 124px;
  padding: 8px 12px;
  margin-top: 18px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: var(--skyblue);
  color: var(--white);
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  line-height: 1.4;

  &:focus,
  &:hover {
    background-color: var(--blue);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
