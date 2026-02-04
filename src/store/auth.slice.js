import { createSlice } from '@reduxjs/toolkit';

const tokenFromStorage = localStorage.getItem('token');

const initialState = {
  token: tokenFromStorage || null,
  isAuth: !!tokenFromStorage,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user || null;
      state.isAuth = true;
      localStorage.setItem('token', state.token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
