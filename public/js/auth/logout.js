import { clearAuth, clearWelcomeMsg } from "../common/Storage.js";
import { showMessage, getCSRFHeader } from "../common/handlers.js";
import { getMsgElement } from "../utils/utils.js";
// Get the message element from the DOM
const msgElm = getMsgElement()

// Define an asynchronous function to handle the logout process
async function logoutHandler(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  try {
    const header = await getCSRFHeader();
    
  } catch (error) {
    // If an error occurs during the logout process, display an error message
    const errorMessage = error.response
      ? error.response.data.error
      : "An error occurred";
    showMessage(msgElm, errorMessage, "#fc6736");
  }
}

// Function to attach the logout handler to a button element
export function attachLogoutHandler(button) {
  if (button) {
    // Add a click event listener to the button that triggers the logout handler
    button.addEventListener("click", logoutHandler);
  }
}
// Export the logout function to make it accessible to other modules
