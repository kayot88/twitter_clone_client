import axios from "axios";
import produce, { Draft } from "immer";
import { Action } from "redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createSelector } from "reselect";
import { rootState } from "./store";

/* state types */
enum LoadingStatus {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

interface Tweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}
export interface TweetsState {
  items: Tweet[];
  loadingStatus: LoadingStatus;
}

/* actions */
export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  LOADING_STATE = "tweets/LOADING_STATE",
}

interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState["items"];
}
interface LoadingStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.LOADING_STATE;
  payload: LoadingStatus;
}
interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | LoadingStateInterface;

export const SetTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});
export const FetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});
export const LoadingStateAction = (
  payload: LoadingStatus
): LoadingStateInterface => ({
  type: TweetsActionsType.LOADING_STATE,
  payload,
});

/* reducer */

const initialTweetsState: TweetsState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingStatus = LoadingStatus.LOADING;
        break;
      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingStatus = LoadingStatus.LOADED;
        break;
      case TweetsActionsType.LOADING_STATE:
        draft.loadingStatus = action.payload;
        break;
      default:
        break;
    }
    const { type } = action;

    if (type === TweetsActionsType.FETCH_TWEETS) {
      // draft.items = payload;
    }
  },
  initialTweetsState
);
/* selectors */
export const tweetsSelect = createSelector(
  (state: rootState) => state.tweets,
  (tweets) => tweets.items
);
export const StatusTweetSelect = createSelector(
  (state: rootState) => state.tweets,
  (tweets) => tweets.loadingStatus
);

/* sagas */
function* fetchTweetsRequest(): any {
  try {
    const items = yield call(tweetsApi.fetchTweets);
    yield put(SetTweets(items));
  } catch (error) {
    yield put(LoadingStateAction(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}

export default tweetsSaga;

/* api */
const tweetsApi = {
  fetchTweets(): Promise<TweetsState["items"]> {
    return axios.get(`https://trycode.pw/c/35MF5.json`).then((res) => res.data);
  },
};
