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
  const response = await clientApi.postBlogPost(post);
  return response.data;
});

export const removePost = createAsyncThunk("posts/removePost", async ({ id }) => {
  const response = await clientApi.deleteBlogPost(id);
  if (response.status === 204) return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Move this to api
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
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
