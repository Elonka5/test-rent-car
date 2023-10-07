import Car from 'components/Car/Car';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/api';
import { switchFavorite } from 'redux/favorite/favoriteSlice';

const CarsList = () => {
  const cars = useSelector(state => state.cars.carData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSwitchFavorite = car => {
    dispatch(switchFavorite(car));
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CarsList;

// export const selectAdverts = state => state.adverts.adverts;
export const selectCarData = state => state.cars.carData;
