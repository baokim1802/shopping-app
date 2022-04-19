import { call, put, takeLatest } from "redux-saga/effects";
import { actionFetchUser, userActions } from ".";
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

export function* userSaga() {
  yield takeLatest(actionFetchUser, fetchUser);
}
