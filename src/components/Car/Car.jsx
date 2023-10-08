import React from 'react';
import { BtnFav } from './CarStyled';
// import { useSelector } from 'react-redux';
// import { selectFavoriteCar } from 'redux/favorite/favoriteSelectors';

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
  //   const isFavoriteCar = useSelector(selectFavoriteCar);
  return (
    <li key={id}>
      <img src={img} alt="car" />
      <BtnFav onClick={onSwitchFavorite}></BtnFav>
      <h2>
        {' '}
        {make}
        <span>{model}</span>
        <span>{year}</span>
      </h2>
      <p>{rentalPrice}</p>
      <p>
        {address.split(', ').splice(1, 1)[0]} |{' '}
        {address.split(', ').splice(-1, 1)[0]} | {rentalCompany} | {type}|{' '}
        {model} | {id} | {accessories[0]} | {functionalities[0]}
      </p>
      <button type="button" id={id} onClick={onModalOpen}>
        Learn More
      </button>
    </li>
  );
};

export default Car;
