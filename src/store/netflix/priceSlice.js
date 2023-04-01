import { createSlice } from '@reduxjs/toolkit';

export const priceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0
    },
    reducers: {
        setPrice: (state, action ) => {
            state.price = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPrice } = priceSlice.actions;