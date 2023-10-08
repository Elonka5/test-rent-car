import { createSlice } from '@reduxjs/toolkit';
import { fetchCarPerPage, fetchCars } from 'redux/api';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carData: [],
    carPerPage: [],
    filter: null,
  },
  reducers: {
    searchCars: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.carData = action.payload;
      })
      .addCase(fetchCarPerPage.fulfilled, (state, action) => {
        state.carPerPage = [...state.carPerPage, ...action.payload];
      });
  },
});

export const carReducer = carsSlice.reducer;
export const { searchCars } = carsSlice.actions;
