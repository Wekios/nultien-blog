import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "../features/notifications/notificationsSlice";

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});
