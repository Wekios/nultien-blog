import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: "1", text: "Welcome back" }];

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNew: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => {
        const id = nanoid();
        const text = `created new blog with title ${title}`;
        return { payload: { id, text } };
      },
    },
    removeAll: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addNew, removeAll } = notificationsSlice.actions;

export default notificationsSlice.reducer;
