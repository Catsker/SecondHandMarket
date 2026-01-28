import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null, // текущая выбранная категория
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    resetCategory(state) {
      state.selectedCategory = null;
    },
  },
});

export const { setCategory, resetCategory } = catalogSlice.actions;
export default catalogSlice.reducer;
