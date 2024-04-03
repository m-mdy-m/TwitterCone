import Header from "./components/common/header.js";
import { initializeComponentsNavigation } from "./nav/navigation-handler.js";
import { handleTweetTextAreaEvents } from "./tweets/Post.js";
import { listMenuTweet, showUserRetweeted } from "./tweets/helperTweet.js";
import { getTweets, getUserInfo } from "./utils/apiOperations.js";

export async function HomePage() {
  handleTweetTextAreaEvents();
  const header = document.querySelector("header");
  const { username, profilePic } = await getUserInfo();
  header.innerHTML = Header({ profile: profilePic, username });
  initializeComponentsNavigation();
  await getTweets();
  showUserRetweeted();
  listMenuTweet();
}
