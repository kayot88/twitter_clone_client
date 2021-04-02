import produce, { Draft } from "immer";
import { Action } from "redux";

/* state types */
enum LoadingStatus {
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

interface Tweet {
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}
interface TweetsState {
  items: Tweet[];
  loadingStatus: LoadingStatus;
}

/* actions */
export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
}

interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState["items"];
}
interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
  // payload: string;
}

type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface;

export const SetTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});
export const FetchTweets = (payload: string): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
  // payload
});

/* reducer */

const initialTweetsState: TweetsState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    const { type } = action;

    if (type === TweetsActionsType.FETCH_TWEETS) {
      // draft.items = payload;
    }
  },
  initialTweetsState
);
