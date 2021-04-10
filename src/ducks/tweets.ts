import axios from "axios";
import { createContext } from "react";

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

// export const contextDefaultValues: TweetsState = {
//   items: [],
//   LoadingStatus: "NEVER",
// };

// export const TweetContext = createContext<TweetsState>(contextDefaultValues);

/* api */
// export const tweetsApi = {
//   fetchTweets(): Promise<TweetsState["items"]> {
//     return axios.get(`https://trycode.pw/c/35MF5.json`).then((res) => res.data);
//   },
// };

export function tweetsApi() {
  console.log("tweetsApi");
  const response = axios
    .get(`https://trycode.pw/c/35MF5.json`)
    .then((res) => res.data);
console.log(response);
  return response;
}
