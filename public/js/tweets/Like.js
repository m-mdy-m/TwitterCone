import { getUserInfo, toggleLike } from "../utils/apiOperations.js";
import { getId, showMessage } from "../utils/helper.js";
import { getMsgElement } from "../utils/utils.js";
const msgElm = getMsgElement();
// Function to handle the click event
// Function to handle the click event
export async function handleClick(event) {
  const elm = event.target;
  console.log('elm +>',elm);
  try {
    // Get the ID of the element
    const id = getId(elm);

    // Toggle the like and get the updated count
    const count = await toggleLike(id);

    // Update the UI based on the updated count and user's like status
    updateUI(elm, count, id);
  } catch (error) {
    // Handle errors gracefully
    handleError(elm);
  }
}

// Function to update UI based on like count and user's like status
async function updateUI(elm, count, id) {
  // Get user information
  const user = await getUserInfo();

  // Check if the user has liked the item
  const isLikedUser = user.likes.includes(id);

  // Construct the updated HTML content based on the like count and user's like status
  let htmlContent = "";

  if (isLikedUser) {
    htmlContent = count;
    elm.src = "/assets/icon/nav/heart-full.svg";
  } else {
    if (count > 0) {
      htmlContent = count;
      elm.src = "/assets/icon/nav/heart-null.svg";
    } else {
      htmlContent = null;
    }
  }

  // Get the sibling paragraph tag for count display
  const pTag = elm.nextElementSibling;

  // Update the HTML content of the sibling paragraph tag
  pTag.innerHTML = htmlContent;

  // Add or remove animation based on like count
  if (count <= 1) {
    elm.classList.add("heart-icon");
  } else {
    elm.classList.remove("heart-icon");
  }
}

// Function to handle errors gracefully
function handleError(elm) {
  // Revert back to the default heart icon
  elm.src = "/assets/icon/nav/heart-null.svg";
  // Show error message to the user
  showMessage(
    msgElm,
    "Sorry, we couldn't process your like at the moment. Please try again later.",
    "#B71C1C"
  );
}
