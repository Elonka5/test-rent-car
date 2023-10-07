import Car from 'components/Car/Car';
import ModalDetails from 'components/Modal/ModalDetails';
import ModalForm from 'components/Modal/ModalForm';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/api';
import { switchFavorite } from 'redux/favorite/favoriteSlice';
import { selectIsOpen } from 'redux/modal/modalSelectors';
import { closeModal, openModal } from 'redux/modal/modalSlice';

const CarsList = () => {
  const cars = useSelector(state => state.cars.carData);
  const isModalOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSwitchFavorite = car => {
    dispatch(switchFavorite(car));
  };

  const handleClickModal = evt => {
    const currentCars = cars.find(
      elem => elem.id === Number(evt.currentTarget.id)
    );
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

// export const selectAdverts = state => state.adverts.adverts;
export const selectCarData = state => state.cars.carData;
