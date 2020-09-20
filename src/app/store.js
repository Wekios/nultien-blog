import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/notificationsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    categories: categoriesReducer,
  },
});
