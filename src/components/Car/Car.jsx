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
import defaultImage from '../../images/defaultImage.jpg';
import { useState } from 'react';
import Button from 'components/Button/Button';

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
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card key={id}>
      {imageError ? (
        <img src={defaultImage} alt="default" />
      ) : (
        <img src={img || defaultImage} alt="car" onError={handleImageError} />
      )}
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
        <Button
          id={id}
          type="button"
          onClick={onModalOpen}
          text="Learn More"
        ></Button>
      </DescrWrapper>
    </Card>
  );
};

export default Car;
