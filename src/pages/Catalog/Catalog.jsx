import CarsList from 'components/CarsList/CarsList';
import React, { useEffect } from 'react';
import { fetchCars } from 'redux/api';
import { useDispatch } from 'react-redux';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  });
  return (
    <div>
      <CarsList />
    </div>
  );
};

export default Catalog;
