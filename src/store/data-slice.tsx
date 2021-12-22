import { createSlice } from "@reduxjs/toolkit";

type dynamicObj = { [key: string]: any };
interface state {
  products: any[];
  cart: dynamicObj;
  order: dynamicObj;
}

const initialState: state = {
  products: [],
  cart: {},
  order: {},
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
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
