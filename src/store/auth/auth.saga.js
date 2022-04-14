import { call, put, putResolve, takeLatest } from "redux-saga/effects";
import { actionFetchLogin, authActions } from ".";
import { setToken, setUser } from "../../core/utils/token";
import { authService } from "../../services/authService";
import { userService } from "../../services/userService";
import { actionFetchUser, userActions } from "../user";

function* fetchLogin(action) {
  try {
    console.log("fetch login", action);
    yield putResolve(authActions.statusFetchLogin(true));

    const cred = {
      username: action.payload.email,
      password: action.payload.password,
    };

    const res = yield call(authService.login, cred);

    console.log("res", res);

    if (res.message) {
      return yield put(authActions.errorMessage(res.message));
    }

    setToken(res.data);
    yield put(actionFetchUser());

    // const user = yield call(userService.getInfo);
    // setUser(user.data);

    // yield put(userActions.setUser(user.data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(authActions.statusFetchLogin(false));
  }
}

export function* authSaga() {
  yield takeLatest(actionFetchLogin, fetchLogin);
}
