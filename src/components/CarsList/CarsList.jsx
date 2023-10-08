import Car from 'components/Car/Car';
import ModalDetails from 'components/Modal/ModalDetails';
import ModalForm from 'components/Modal/ModalForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/api';
import { selectCarData } from 'redux/cars/carsSelectors';
import { selectFavoriteCar } from 'redux/favorite/favoriteSelectors';
import {
  removeFromFavorites,
  switchFavorite,
} from 'redux/favorite/favoriteSlice';
import { selectIsOpen } from 'redux/modal/modalSelectors';
import { closeModal, openModal } from 'redux/modal/modalSlice';

const CarsList = () => {
  const cars = useSelector(selectCarData);
  const favoriteCars = useSelector(selectFavoriteCar);
  const isModalOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSwitchFavorite = car => {
    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(switchFavorite(car));
    }
  };

  const handleClickModal = evt => {
    const currentCars = cars.reduce((foundItem, currentItem) => {
      if (foundItem) {
        return foundItem;
      }
      return currentItem.id === Number(evt.currentTarget.id)
        ? currentItem
        : null;
    }, null);
    dispatch(openModal());
    dispatch(closeModal(currentCars));
  };

  return (
    <div>
      <ul>
        {cars.map(car => {
          return (
            <Car
              key={car.id}
              {...car}
              onSwitchFavorite={() => handleSwitchFavorite(car)}
              onModalOpen={handleClickModal}
            />
          );
        })}
        {isModalOpen && (
          <ModalForm>
            <ModalDetails />
          </ModalForm>
        )}
      </ul>
    </div>
  );
};

export default CarsList;
