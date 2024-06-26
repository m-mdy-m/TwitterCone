import { PostContent } from "../components/tweet/PostContent.js";
import {
  toggleBookmark,
  toggleDeleteTweet,
  toggleEditTweet,
} from "../utils/apiOperations.js";

// Function to show user retweeted information on mouse hover
export function showUserRetweeted() {
  // Select all elements with class "container__profile-users"
  document.querySelectorAll(".container__profile-users").forEach((elm) => {
    // Find profile and user retweeted elements within each container
    const profile = elm.querySelector(".profile-user");
    const userRetweeted = elm.querySelector(".user-retweeted");

    // Add mouseenter event listener to profile element
    profile.addEventListener("mouseenter", () => {
      // Show user retweeted information by removing hidden class and adding visible class
      userRetweeted.classList.remove("hiddenId");
      userRetweeted.classList.add("visibleId");
    });

    // Add mouseleave event listener to profile element
    profile.addEventListener("mouseleave", () => {
      // Hide user retweeted information after a delay
      setTimeout(() => {
        userRetweeted.classList.remove("visibleId");
        userRetweeted.classList.add("hiddenId");
      }, 1500); // Delay of 1500 milliseconds (1.5 seconds)
    });
  });
}
// Function to handle the list menu of tweets
export function listMenuTweet(className=".list__menu-tweet",steps=3,eventMouse=true) {
  document.querySelectorAll(className).forEach((icon) => {
    let parentNode = icon;
    for (let i = 0; i < steps; i++) {
      parentNode = parentNode.parentNode;
    }
    let  tweet = parentNode
    let  tweetId = parentNode.getAttribute("data-id");
    if(eventMouse){
      icon.addEventListener("mouseenter", () => {
        icon.classList.add("show-menu-tweet");
        icon.classList.remove("hidden-menu-tweet");
      });
      icon.addEventListener("mouseleave", () => {
        icon.classList.remove("show-menu-tweet");
        icon.classList.add("hidden-menu-tweet");
      });
    }
    // Find the bookmarked status element and bookmark icon
    const bookmarked = tweet.querySelector(".bookmarked");
    const bookmarkIcon = icon.querySelector(".bookmarkIcon");

    // Add event listener to the bookmark icon for toggling bookmark status
    bookmarkIcon.addEventListener("click", async () => {
      // Toggle bookmark status of the tweet
      const isBookmarked = await toggleBookmark(tweetId);

      // Update bookmark display and icon color based on bookmark status
      bookmarked.style.display = `${isBookmarked ? "block" : "none"}`;
      bookmarkIcon.style.color = `${
        isBookmarked ? "rgb(96 165 250)" : "rgb(156 163 175)"
      }`;
    });

    // Add event listener to the delete icon for deleting the tweet
    icon.querySelector(".deleteIcon").addEventListener("click", async () => {
      // Toggle delete status of the tweet
      const deleteTweet = await toggleDeleteTweet(tweetId);

      // If the tweet is deleted, add a delete animation and remove the tweet after a delay
      if (deleteTweet) {
        tweet.classList.add("delete-animation");
        setTimeout(() => {
          tweet.remove();
        }, 1500);
      }
    });
    let clickIcon = 0
    icon.querySelector(".editIcon").addEventListener("click", async () => {
      ++clickIcon
      const content = tweet.querySelector("#content-tweet");
      const wrapperContent = content.parentNode;
      const updateContent = PostContent({
        edit_mode: true,
        content: content.innerHTML,
      });
      wrapperContent.innerHTML = updateContent;
      const tweetInput = tweet.querySelector("#editContent");
      const button = tweet.querySelector("#iconSubmitEdit");
      const edited_tweet = tweet.querySelector('.status__mode-edit')
      button.classList.add("show-button-edit");
      button.classList.remove("remove-button-edit");
      tweetInput.focus();
      await editTweetContent(tweetId, button, wrapperContent,edited_tweet);
    });
  });
}
// Function to automatically resize the input field based on its content
export function autoResizeInput() {
  // Get the input element and its parent container
  const tweetInput = document.getElementById("editContent");
  const parent = tweetInput.parentNode.parentNode.parentNode.parentNode;

  // Set the input field height to "auto" to allow it to expand based on content
  tweetInput.style.height = "auto";

  // Set the input field height to match its scroll height, effectively resizing it based on content
  tweetInput.style.height = tweetInput.scrollHeight + "px";

  // Calculate the actual height of the parent container including padding and borders
  const parentStyles = window.getComputedStyle(parent);
  const parentPaddingTop = parseFloat(parentStyles.paddingTop);
  const parentPaddingBottom = parseFloat(parentStyles.paddingBottom);
  const parentBorderTop = parseFloat(parentStyles.borderTopWidth);
  const parentBorderBottom = parseFloat(parentStyles.borderBottomWidth);
  const parentHeight =
    parent.clientHeight -
    parentPaddingTop -
    parentPaddingBottom -
    parentBorderTop -
    parentBorderBottom;

  // Determine the minimum and maximum allowable heights for the parent container
  const minHeight = parentHeight;
  const maxHeight = parentStyles.height;

  // Calculate the new height for the parent container, ensuring it stays within the min and max height limits
  const newHeight = Math.min(
    Math.max(
      tweetInput.scrollHeight +
        parentPaddingTop +
        parentPaddingBottom +
        parentBorderTop +
        parentBorderBottom,
      minHeight
    ),
    maxHeight
  );

  // Apply the new height to the parent container
  parent.style.height = newHeight + "px";
}

// Function to handle editing of tweet content.
export function editTweetContent(tweetId, button, wrapperContent,edited_tweet) {
  // Get the tweet input element
  const tweetInput = document.getElementById("editContent");

  // Add input event listener to automatically resize the input field
  tweetInput.addEventListener("input", autoResizeInput);

  // Add click event listener to the button
  button.addEventListener("click", async () => {
    // Generate updated content based on the input value
    const updateContent = PostContent({
      edit_mode: false,
      content: tweetInput.value,
    });

    // Update the content wrapper with the updated content
    wrapperContent.innerHTML = updateContent;
    if(edited_tweet){
      edited_tweet.style.display = 'block'
    }
    // Remove the 'show-button-edit' class and add the 'remove-button-edit' class to the button
    button.classList.remove("show-button-edit");
    button.classList.add("remove-button-edit");
    // Call the toggleEditTweet function to update the tweet content on the server
    await toggleEditTweet(tweetId, tweetInput.value);
  });
}
