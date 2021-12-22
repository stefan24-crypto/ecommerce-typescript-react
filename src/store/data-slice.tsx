import { createSlice } from "@reduxjs/toolkit";

type dynamicObj = { [key: string]: any };
interface state {
  products: any[];
  cart: dynamicObj;
}

const initialState: state = {
  products: [],
  cart: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
