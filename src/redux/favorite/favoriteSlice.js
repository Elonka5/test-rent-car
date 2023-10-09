import { createSlice } from '@reduxjs/toolkit';

const initialStateFavorite = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    switchFavorite: (state, action) => {
      const carToAdd = action.payload;
      if (!state.favoriteItems.some(car => car.id === carToAdd.id)) {
        state.favoriteItems.push(carToAdd);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        car => car.id !== action.payload.id
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { switchFavorite, removeFromFavorites } = favoriteSlice.actions;
