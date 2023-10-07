import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/api';
import CarsList from './CarsList/CarsList';

export const App = () => {
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
