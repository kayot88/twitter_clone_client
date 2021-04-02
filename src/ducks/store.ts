import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { tweetsReducer } from "./tweets/tweetReducer";
import createSagaMiddleware from "redux-saga";
import tweetsSaga from './tweets/saga';

const sagaMiddleware = createSagaMiddleware();
export const rootReducer = combineReducers({
  tweets: tweetsReducer,
});
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(tweetsSaga);