import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", text: "Welcome back" }];

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.push(action.payload);
    },
    removeAll: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addNew, removeAll } = notificationsSlice.actions;

export default notificationsSlice.reducer;
