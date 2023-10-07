import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setdata: (state, action) => {
      return [...state, action.payload];
    },
    deletealliteams: (state, action) => {
      return []
    },
 
  },
});

export const { setdata,deletealliteams } = cart.actions;

export default cart.reducer;