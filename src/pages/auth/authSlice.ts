import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/user.types";
import type { RootState } from "../../app/store";

interface UsersState {
  user: User | null;
  access_token: string;
  // refresh_token: string;
}

const initialState: UsersState = {
  user: null,
  access_token: "",
  // refresh_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UsersState>) => {
      const { access_token, user } = action.payload;
      state.user = user;
      state.access_token = access_token;
      // state.refresh_token = refresh_token;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", JSON.stringify(access_token));
      // localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
    },

    setAccessToken: (
      state,
      action: PayloadAction<{ access_token: string }>,
    ) => {
      const { access_token } = action.payload;
      state.access_token = access_token;
      localStorage.setItem("access_token", JSON.stringify(access_token));
    },

    logout: (state) => {
      state.access_token = "";
      // state.refresh_token = "";
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { login, setAccessToken, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

// Selectors use a function overload to avoid circular dependency
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.auth.access_token;
// export const selectCurrentRefreshToken = (state: RootState) =>
//   state.auth.refresh_token;
