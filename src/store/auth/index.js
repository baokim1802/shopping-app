import { createAction, createSlice } from "@reduxjs/toolkit";
import { USER_STORAGE_KEY } from "../../core/constants/key";

// let _user = localStorage.getItem(USER_STORAGE_KEY);
// if (_user) {
//   _user = JSON.parse(_user);
// }

const initialState = {
  // user: _user,
  // errorMessage: "",
  // isFetchLogin: false,
};

export const {
  reducer: authReducer,
  actions: authActions,
  name,
} = createSlice({
  initialState,
  name: "auth",
  reducers: {
    errorMessage: (state, action) => ({ errorMessage: action.payload }),
    statusFetchLogin: (state, action) => ({ isFetchLogin: action.payload }),
    set(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const actionFetchLogin = createAction(`${name}/fetchLogin`);
export const actionLogout = createAction(`${name}/logout`);
export const actionFetchRegister = createAction(`${name}/fetchRegister`);
