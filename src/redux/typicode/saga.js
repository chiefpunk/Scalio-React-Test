import { all, call, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import * as api from "../../services/api";

export function* setNumber({ payload }) {
  const { number } = payload;
  const { getData } = api;

  yield put({
    type: actions.SET_STATE,
    payload: { loading: true }
  });

  const data = yield call(getData, number);

  if (data) {
    yield put({
      type: actions.SET_STATE,
      payload: { loading: false, data: data, error: null }
    });
  } else {
    yield put({
      type: actions.SET_STATE,
      payload: {
        error: { message: "Can't fetch the data from api" },
        loading: false,
        data: []
      }
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SET_NUMBER, setNumber)]);
}
