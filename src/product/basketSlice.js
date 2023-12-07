import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},
};
const reducers = {
    addToBasket: (state, action) => {
        const { id } = action.payload
        // state.items.push(action.payload);
        state.items[id] = action.payload
    },
    removeFromBasket: (state, action) => {
        const { id } = action.payload
        delete state.items[id]

    }

}
const basketSlice = createSlice({
    name: 'baskest',
    initialState,
    reducers: reducers
});

export const { addToBasket,removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
