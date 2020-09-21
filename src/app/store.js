import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    categories: categoriesReducer,
    notifications: notificationsReducer,
  },
});
