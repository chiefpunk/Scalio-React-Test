import { all } from "redux-saga/effects";
import typicode from "./typicode/saga";

function* rootSaga() {
  yield all([typicode()]);
}

export default rootSaga;
