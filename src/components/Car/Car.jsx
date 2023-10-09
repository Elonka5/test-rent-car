import React from 'react';
import {
  AdressDescr,
  BtnFav,
  Card,
  DescrWrapper,
  FaHeartStyled,
  FiHeartStyled,
  ModelWrap,
  Price,
} from './CarStyled';
import { useSelector } from 'react-redux';
import { selectFavoriteCar } from 'redux/favorite/favoriteSelectors';
import { BtnStyled } from 'components/Button/ButtonStyled';

const Car = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  functionalities,
  onSwitchFavorite,
  onModalOpen,
}) => {
  const isFavoriteCar = useSelector(selectFavoriteCar);
  const isFavorite = isFavoriteCar.some(item => item.id === id);

  return (
    <Card key={id}>
      <img src={img} alt="car" />
      <BtnFav onClick={onSwitchFavorite}>
        {isFavorite ? <FaHeartStyled /> : <FiHeartStyled />}
      </BtnFav>
      <DescrWrapper>
        <ModelWrap>
          <h2> {make}</h2>
          <span>{model},</span>
          <p>{year}</p>
        </ModelWrap>
        <Price>{rentalPrice}</Price>
        <AdressDescr>
          {address.split(', ').splice(1, 1)[0]} |{' '}
          {address.split(', ').splice(-1, 1)[0]} | {rentalCompany} | {type}|{' '}
          {model} | {id} | {accessories[0]} | {functionalities[0]}
        </AdressDescr>
        <BtnStyled id={id} onClick={onModalOpen}>
          Learn More
        </BtnStyled>
      </DescrWrapper>
    </Card>
  );
};

export default Car;
