import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://651ff119906e276284c3c30e.mockapi.io',
});

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/adverts');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarPerPage = createAsyncThunk(
  'adverts/fetchCarPerPage',
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params: {
          page: page,
          limit: 8,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
