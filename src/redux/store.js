import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modal/modalSlice';
import { carReducer } from './cars/carsSlice';
import { favoriteReducer } from './favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
  },
});
