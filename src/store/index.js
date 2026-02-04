import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import { authApi } from './auth.api';
import { productsApi } from './products.api';
import { categoriesApi } from './categories.api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});
