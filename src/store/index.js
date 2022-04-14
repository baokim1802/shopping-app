import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import { authReducer } from "./auth";
import { actionFetchUser, userReducer } from "./user";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // product: productReducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

store.dispatch(actionFetchUser());

export default store;
