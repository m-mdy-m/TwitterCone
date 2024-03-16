import Tweet from "../components/Tweet.js";
import {
  calculateLikeCount,
  getCurrentTimeFormatted,
} from "../utils/utils.js";
import { handleClick } from "./Like.js";
const wrapper = document.getElementById("wrapperTweet");

// Function to add a single tweet to the UI
export function AddTweet(response,userInfo) {
  // Extract tweet data from the response
  const tweetData = response.data.data;
  // Render the tweet template
  const tweetTemplate = renderTweet(tweetData,userInfo);

  // Append the rendered tweet template to the wrapper element
  appendTweet("afterbegin", tweetTemplate);

  attachIconClickListeners();
  // Clear the tweet input field after adding the tweet
  clearTweetInput();
}

// Function to show multiple tweets in the UI
export function ShowTweets(response,userInfo) {
  // Extract tweets array from the response
  let tweets = response.data.tweets;
  // Sort the tweets array by createdAt in descending order (newest to oldest)
  tweets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Iterate over each tweet and render its template
  tweets.forEach((tweet) => {
    const tweetTemplate = renderTweet(tweet,userInfo);

    // Append the rendered tweet template to the wrapper element
    appendTweet("beforeend", tweetTemplate);
  });
  // Clear the tweet input field after showing tweets
  clearTweetInput();
}

// Function to render a single tweet template
function renderTweet(tweet,userInfo) {
  // Extract relevant data from the tweet object
  const { postedBy, content, createdAt, _id } = tweet;
  const { username, profilePic } = postedBy;
  const {  likes } = userInfo
  try {
    const isLiked = likes.some((like) => like === _id);
    // Calculate the number of likes for the tweet
    const likeCount = calculateLikeCount(tweet);
    // Gather all necessary data
    const likeIcon = isLiked ? "nav/heart-full.svg" : "nav/heart-null.svg";
    // console.log('likeIcon=>',likeIcon);
    const formattedCreatedAt = getCurrentTimeFormatted(createdAt);
    // Render the tweet template with formatted creation time
    return Tweet({
      username,
      profile: profilePic,
      content,
      createdAt: formattedCreatedAt,
      id: _id,
      likeCount,
      srcLikeIcon: likeIcon,
      retweetCount: "",
    });
  } catch (error) {
    // Handle any errors that occur during the asynchronous operation
    console.error('Error fetching user data:', error);
    // Return null or handle the error in another appropriate way
    return null;
  }
}

// Function to append a tweet template to the UI
function appendTweet(position, tweetTemplate) {
  // Append the tweet template HTML to the wrapper element
  wrapper.insertAdjacentHTML(position, tweetTemplate);
}

// Function to clear the tweet input field
function clearTweetInput() {
  // Clear the value of the tweet input field
  document.getElementById("tweetInput").value = "";
}

// Attaches click event listeners to all elements with the class "icons".
export function attachIconClickListeners() {
  // Select all elements with the class "icons"
  document.querySelectorAll(".icons").forEach((icon) => {
    // Attach a click event listener to each icon
    icon.addEventListener("click", handleClick);
  });
}
