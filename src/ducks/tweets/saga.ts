import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { TweetsActionsType } from "../tweets/tweetReducer";
import { FetchTweets } from "./tweetReducer";
function* fetchTweetsRequest() {
  console.log("test");
}

function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}

export default tweetsSaga;
