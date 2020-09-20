import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api";

const initialState = [];

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await clientApi.getCategories();
  // ? A little bit dirty and this can be avoided if we allow author to input a new category
  if (response.data.resultData.length < 3) {
    const newCategories = await clientApi.seedCategories();
    newCategories.forEach((cat) => response.data.resultData.push(cat.data));
  }
  return response.data.resultData;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (_state, action) => {
      return action.payload;
    },
  },
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories;
