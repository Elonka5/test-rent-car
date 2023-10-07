import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    modalData: null,
  },
  reducers: {
    openModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    closeModal: (state, { payload }) => {
      state.modalData = payload;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
