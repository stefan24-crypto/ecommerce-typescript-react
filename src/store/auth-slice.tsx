import { User } from "@firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

interface state {
  curUser: User | null;
}
const initialState: state = {
  curUser: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser(state, action) {
      state.curUser = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
