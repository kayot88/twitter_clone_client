import { all } from "@redux-saga/core/effects";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import tweetsSaga, { tweetsReducer } from "./tweets";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    items: tweetsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
    logger,
  ] as const,
});

sagaMiddleware.run(rootSaga);

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}
 