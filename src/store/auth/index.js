import { createAction, createSlice } from "@reduxjs/toolkit";
import { USER_STORAGE_KEY } from "../../core/constants/key";

let _user = localStorage.getItem(USER_STORAGE_KEY);
if (_user) {
  _user = JSON.parse(_user);
}

const initialState = {
  user: _user,
  errorMessage: "",
  isFetchLogin: false,
};

export const actionFetchLogin = createAction("auth/fetchLogin");

export const { reducer: authReducer, actions: authActions } = createSlice({
  initialState,
  name: "auth",
  reducers: {
    errorMessage: (state, action) => ({ errorMessage: action.payload }),
    statusFetchLogin: (state, action) => ({ isFetchLogin: action.payload }),
  },
});
