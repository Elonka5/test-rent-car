import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modal/modalSlice';
import { carReducer } from './cars/carsSlice';
import { favoriteReducer } from './favorite/favoriteSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteItems'],
};

export const store = configureStore({
  reducer: {
    cars: carReducer,
    modal: modalReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
