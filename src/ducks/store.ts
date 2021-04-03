import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { tweetsReducer } from "./tweets";
import createSagaMiddleware from "redux-saga";
import { TweetsState } from '../ducks/tweets';
import { all } from "@redux-saga/core/effects";
import tweetsSaga from "./tweets";

const sagaMiddleware = createSagaMiddleware();
export const rootReducer = combineReducers({
  tweets: tweetsReducer,
});
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, composedEnhancers);

export interface rootState{
  tweets: TweetsState
}


sagaMiddleware.run(rootSaga);

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}