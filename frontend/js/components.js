// Import your header component function here
import { LoginForm, SignupForm } from "./components/form/FormHandler.js";
import Header from "./components/header.js"; // Adjust the path as necessary

// Function to insert the header into the DOM
function insertHeader() {
  // Find the header container element in the DOM
  const headerContainer = document.querySelector("header");

  // Check if the header container element exists
  if (headerContainer) {
    // Replace the content of the header container with the HTML content generated by the Header component
    headerContainer.innerHTML = Header();
  }
}

function insertForm() {
  const containerForm = document.getElementById("container-form");
  if (containerForm) {
    const path = window.location.pathname; // Get the current path
    if (path === "/auth/login") {
      containerForm.innerHTML = LoginForm();
    } else if (path === "/auth/signup") {
      containerForm.innerHTML = SignupForm();
    }
  }
}

// Call the insertHeader function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  insertHeader();
});
insertForm();
