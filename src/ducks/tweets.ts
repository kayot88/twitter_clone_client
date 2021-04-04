import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import produce, { Draft } from "immer";
import { Action } from "redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createSelector } from "reselect";
import { RootState } from "./store";

/* state types */
enum LoadingStatus {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Tweet {
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

/* reducer */

const tweetsSlice = createSlice({
  name: "tweetsSlice",
  initialState: {
    items: [],
    loadingStatus: LoadingStatus.NEVER,
  },
  reducers: {
    SetTweets: (state, { payload }) => {
      state.loadingStatus = LoadingStatus.LOADED;
      state.items = payload;
    },
    FethcTweets: (state) => {
      state.loadingStatus = LoadingStatus.LOADING;
      state.items = [];
    },
    LoadingStateAction: (state, { payload }) => {
      state.loadingStatus = payload;
    },
  },
});

export const { SetTweets, FethcTweets, LoadingStateAction } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;


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
  yield takeLatest(FethcTweets.type, fetchTweetsRequest);
}

export default tweetsSaga;

/* api */
const tweetsApi = {
  fetchTweets(): Promise<TweetsState["items"]> {
    return axios.get(`https://trycode.pw/c/35MF5.json`).then((res) => res.data);
  },
};
