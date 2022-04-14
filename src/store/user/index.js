import { createAction, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../core/utils/token";

const initialState = {
  user: getUser(),
};

export const actionFetchUser = createAction("user/fetchUser");

export const { reducer: userReducer, actions: userActions } = createSlice({
  initialState,
  name: "user",
  reducers: { setUser: (state, action) => ({ user: action.payload }) },
});
