import { handleSubmit } from "./validation.js";
const form = document.getElementById("registerForm");

// Define a wrapper function to dynamically pass the submit URL to handleSubmit
function signup(event) {
  // Replace 'submitUrl' with the dynamic URL you want to use
  const submitUrl = "/auth/signup";
  handleSubmit(event, submitUrl);
}

// Add event listener to the form using the wrapper function
form.addEventListener("submit", signup);
export default signup