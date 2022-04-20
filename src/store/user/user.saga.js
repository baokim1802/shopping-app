import { call, put, takeLatest } from "redux-saga/effects";
import {
  actionFetchChangePassword,
  actionFetchUpdateInfo,
  actionFetchUser,
  userActions,
} from ".";
import { getToken, setUser } from "../../core/utils/token";
import { userService } from "../../services/userService";

function* fetchUser() {
  try {
    if (getToken()) {
      const user = yield call(userService.getInfo);
      setUser(user.data);

      yield put(userActions.setUser(user.data));
    } else {
      yield put(userActions.setUser(null));
    }
  } catch (error) {
    console.error(error);
  }
}

function* fetchChangePassword(action) {
  try {
    const res = yield call(userService.changePassword, action.payload.data);

    if (res.error) {
      return action?.payload?.error(res.error);
    }
    action?.payload?.success?.();
  } finally {
    action?.payload?.end?.();
  }
}

function* fetchUpdateInfo(action) {
  try {
    const res = yield call(userService.updateInfo, action.payload.data);

    if (res.error) {
      return action?.payload?.error(res.error);
    }

    if (res.updateCount) {
      yield put(actionFetchUser());
      action?.payload?.success?.();
    }
  } finally {
    action?.payload?.end?.();
  }
}

export function* userSaga() {
  yield takeLatest(actionFetchUser, fetchUser);
  // yield takeLatest(actionLogout, logout);

  yield takeLatest(actionFetchChangePassword, fetchChangePassword);
  yield takeLatest(actionFetchUpdateInfo, fetchUpdateInfo);
}
