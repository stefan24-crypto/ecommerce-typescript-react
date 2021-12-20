import { createSlice } from "@reduxjs/toolkit";
interface state {
  products: any[];
}

const initialState: state = {
  products: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
