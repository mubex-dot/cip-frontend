import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./authApiSlice";
import { cipApiSlice } from "./cipApiSlice";
import { authReducer } from "@/pages/auth/authSlice";

const store = configureStore({
  reducer: {
    [cipApiSlice.reducerPath]: cipApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cipApiSlice.middleware)
      .concat(authApiSlice.middleware), // caching middlewares
  devTools: true, // developer tools middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
