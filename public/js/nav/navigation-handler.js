import { attachLogoutHandler } from "../auth/logout.js";
import { statusUser } from "../components/navigation/gen/info.js";
import { loadInfo } from "../profile/loadInfo.js";
import { getProfileUser, getUserInfo } from "../utils/apiOperations.js";
import { clearWelcomePhotoFlag, showWelcome } from "../utils/utils.js";
// Function to handle navigation events
function handleNavigation() {
  const navMobile = document.getElementById("nav-mobile");
  const iconNavigation = document.getElementById("iconNavigation");
  const cancelIcon = document.getElementById("cancelIcon");
  // Add event listener to the navigation icon to open the mobile navigation
  iconNavigation.addEventListener("click", () => {
    navMobile.classList.remove("hide-nav");
    navMobile.classList.add("show-nav");
  });

  // Add event listener to the cancel icon to close the mobile navigation
  cancelIcon.addEventListener("click", () => {
    navMobile.classList.add("hide-nav");
    navMobile.classList.remove("show-nav");
  });

  // Add event listener to close the mobile navigation if clicked outside of it
  document.addEventListener("click", (event) => {
    if (
      !navMobile.contains(event.target) &&
      !iconNavigation.contains(event.target) &&
      window.innerWidth < 900
    ) {
      navMobile.classList.add("hide-nav");
      navMobile.classList.remove("show-nav");
    }
  });
}
// Function to execute components on document load
export function initializeComponentsNavigation() {
  const showWelcomePhotoFlag = showWelcome();
  update_status();
  // Initialize logout functionality
  const btnLogout = document.querySelector(".logout");
  attachLogoutHandler(btnLogout);

  // Handle navigation events
  handleNavigation();
  const wrapper = document.querySelector(".userProfileWrapper");
  getProfilePage(wrapper);

  // Optionally display welcome photo
  if (showWelcomePhotoFlag) {
    document.querySelectorAll(".welcome-user").forEach((el) => {
      el.style.display = "block";
    });
    // Optionally, set an expiry for the flag after 10 minutes
    setTimeout(() => {
      clearWelcomePhotoFlag();
      document.querySelectorAll(".welcome-user").forEach((el) => {
        el.style.display = "none";
      });
    }, 10 * 60 * 1000); // 10 minutes
  } else {
    document.querySelectorAll(".welcome-user").forEach((el) => {
      el.style.display = "none";
    });
  }

  // Call the function whenever the window is resized
  window.addEventListener("resize", () => {
    const navMobile = document.getElementById("nav-mobile");
    if (window.innerWidth < 900) {
      handleNavigation();
    } else {
      navMobile.classList.remove("show-nav");
      navMobile.classList.remove("hide-nav");
    }
  });
}

// handle profile page /profile/:username
function getProfilePage(wrapper) {
  wrapper.addEventListener("click", async () => {
    const usernameElement = wrapper.querySelector(".username");
    const username = usernameElement ? usernameElement.innerHTML : null;
    if (!username) {
      console.error("Username element not found");
      return;
    }
    try {
      const response = await getProfileUser(username);

      if (response.success) {
        // Redirect to the profile page if the username matches
        window.location.href = `/profile/${username}`;
      } else {
        // Display an error message or handle the error as needed
        console.error("Error:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
}

// Function to update user status in the UI
export async function update_status() {
  const user = await getUserInfo();
  let userPage,userStatsPage;
  // Fetch user information
  if(window.location.pathname.startsWith('/page')){
    userPage = await  loadInfo()
     // Define user statistics based on fetched user data
      userStatsPage = [
        { id: "posts", value: userPage.tweets.length, unit: "", label: "Posts" },
        { id: "followers", value: userPage.followers.length, unit: "", label: "Followers" },
        { id: "following", value:userPage.following.length, unit: "" , label: "Following" },
      ];
    const tm = statusUser(userStatsPage)
    const statusPageUser = document.getElementById('statusPageUser');
    statusPageUser.innerHTML = tm;
  }
  // Get the wrapper element where user status will be displayed
  const wrapper = document.getElementById('statusUser');

  // Define user statistics based on fetched user data
  const userStats = [
    { id: "posts", value: user.tweets.length, unit: "", label: "Posts" },
    { id: "followers", value: user.followers.length, unit: "", label: "Followers" },
    { id: "following", value:user.following.length, unit: "" , label: "Following" },
  ];
  // Generate HTML template for displaying user status
  const template = statusUser(userStats);

  // Update the content of the wrapper element with the generated template
  wrapper.innerHTML = template;

  // If the current page is a profile page, update the user status in the profile section
  if(window.location.pathname.startsWith('/profile')){
    const statusProfile = document.getElementById('statusProfile');
    statusProfile.innerHTML = template;
  }
}
