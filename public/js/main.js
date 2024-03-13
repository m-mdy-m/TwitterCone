import Header from "./components/common/header.js";
import { mainContent } from "./components/mainContent.js";
const isAuth = localStorage.getItem("logged");
const header = document.querySelector("header");
const main = document.querySelector("main");
console.log(isAuth);
const routes = {
  isAuth: isAuth,
  profile: "/assets/images/profilePic.png",
  username: "m__mdy__m",
};
header.innerHTML = Header(routes);
main.innerHTML += mainContent();