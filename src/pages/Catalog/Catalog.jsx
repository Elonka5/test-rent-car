import CarsList from 'components/CarsList/CarsList';
import React, { useEffect } from 'react';
import { fetchCars } from 'redux/api';
import { useDispatch } from 'react-redux';
import { Container } from './CatalogStyled';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  });
  return (
    <Container>
      <CarsList />
    </Container>
  );
};

export default Catalog;
