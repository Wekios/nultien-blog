import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clientApi } from "../../services/api";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await clientApi.getBlogPosts();
  return response.data.resultData;
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  const response = await clientApi.addBlogPost(post);
  return response.data;
});

export const editPost = createAsyncThunk("posts/editPost", async (post) => {
  clientApi.editBlogPost(post.id, post);
  return post;
});

export const removePost = createAsyncThunk("posts/removePost", async ({ id }) => {
  const response = await clientApi.deleteBlogPost(id);
  if (response.status === 204) return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.pending]: (state, _action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
    [editPost.fulfilled]: (state, action) => {
      console.log(action);
      const { id, title, text } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.text = text;
      }
    },
    [removePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { postUpdated } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);
