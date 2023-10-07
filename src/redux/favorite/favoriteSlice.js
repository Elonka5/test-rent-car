import { createSlice } from '@reduxjs/toolkit';

const FAVORITE_KEY = 'favoriteItems';

const initialStateFavorite = {
  favoriteItems: localStorage.getItem(FAVORITE_KEY)
    ? JSON.parse(localStorage.getItem(FAVORITE_KEY))
    : [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    switchFavorite(state, action) {
      const itemIndex = state.favoriteItems.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const removedItem = state.favoriteItems.splice(itemIndex, 1)[0];
        localStorage.setItem(FAVORITE_KEY, JSON.stringify(state.favoriteItems));
        console.error(`${removedItem.make} removed`);
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { switchFavorite } = favoriteSlice.actions;
