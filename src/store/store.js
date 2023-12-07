import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import basketSlice from '../product/basketSlice';
import productSlice from '../product/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
    basket : basketSlice,
  },
});
