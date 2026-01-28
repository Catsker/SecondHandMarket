import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null
};

const filterSlice = createSlice({
  name: 'topfilter',
  initialState,
  reducers: {
    toggleCategory(state, action) {
      const clickedCategory = action.payload;

      state.category =
        state.category === clickedCategory
          ? null
          : clickedCategory;
    },
    resetAsideCategory(state) {
      state.category = null
    }
  },
});

export const { toggleCategory, resetAsideCategory } = filterSlice.actions;
export default filterSlice.reducer;
