import { Profile } from "./common/Profile.js";
import { LoginForm, SignupForm } from "./form/FormHandler.js";
import { HOME } from "./main/Home.js"
let currentPage = window.location.pathname
export function mainContent(){
    switch(currentPage){
        case '/home':
            return HOME({ username:"m__mdy__m", profilePic: '/assets/images/profilePic.png', profileStory: "/assets/icon/nav/user.svg" });
        case '/auth/login':
            return LoginForm()
        case '/auth/signup':
            return SignupForm()
        case "/profile":
            return Profile()
        default :
            return ""
    
    }
}