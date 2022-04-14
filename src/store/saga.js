import { all } from "redux-saga/effects";
import { authSaga } from "./auth/auth.saga";
import { userSaga } from "./user/user.saga";

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
