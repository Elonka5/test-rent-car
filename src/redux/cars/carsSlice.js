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

// export const initialState = {
//   cars: [],
//   isLoading: false,
//   error: null,
//   filter: '',
// };

// function handlePending(state) {
//   state.isLoading = true;
//   state.error = null;
// }

// function handleRejected(state, { payload }) {
//   state.isLoading = false;
//   state.error = payload;
// }

// function handleFulfilled(state, { payload }) {
//   state.isLoading = false;
//   state.cars = [...state.cars, ...payload];
// }

// const carsSlice = createSlice({
//   name: 'cars',
//   initialState,
//   reducers: {
//     filterAdverts: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCars.fulfilled, handleFulfilled)

//       .addMatcher(action => action.type.endsWith('/pending'), handlePending)
//       .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
//   },
// });

// export const carsReducer = carsSlice.reducer;
// export const { filterAdverts } = carsSlice.actions;
