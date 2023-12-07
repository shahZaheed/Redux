import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Reducers here if needed
  },
});
export const { initialStateOfProduct} = productsSlice.getInitialState;
export default productsSlice.reducer;
