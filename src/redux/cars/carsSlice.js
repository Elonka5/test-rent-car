import { createSlice } from '@reduxjs/toolkit';
import { fetchCarPerPage, fetchCars } from 'redux/api';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carData: [],
    carPerPage: [],
    filter: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    searchCars: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.carData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCarPerPage.fulfilled, (state, action) => {
        state.carPerPage = [...state.carPerPage, ...action.payload];
      });
  },
});

export const carReducer = carsSlice.reducer;
export const { searchCars } = carsSlice.actions;
