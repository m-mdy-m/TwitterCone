import { randomGradientColor } from "../../utils/utils.js";
import { statusUser } from "../navigation/gen/info.js";

export function pageUser() {
  const userStats = [
    { id: "posts", value: 0, unit: "", label: "Posts" },
    { id: "followers", value: 0, unit: "", label: "Posts" },
    { id: "following", value: 0, unit: "", label: "Posts" },
  ];
  return `
    <div class="w-full h-full grid grid-cols-profile relative">
        <div data-page="profile-user" class="rounded-md grid grid-rows-profile transition-all duration-300 ">
          <div class="relative  rounded-t-lg flex justify-center" style="background:${randomGradientColor()}">
                <div data-page="img-profile-user" class="bg-yellow-500 transition-all duration-1000 absolute rounded-full border-4 border-[#434346] w-28 h-28 left-8 -bottom-8 flex justify-center items-center">
                   <img src="/assets/icon/nav/user.svg" alt="" class="profile-img-user rounded-full border-4 w-full h-full  object-cover">
                </div>                                                                                                                                     
          </div>
          <div class="pt-12 px-4 relative" id="userProfileContainer">
              <div class="flex justify-start items-start flex-col">
                <!-- User Name -->
                <h2 data-username class="text-gray-700 hidden-edit pl-2  font-Aktiv__regular cursor-default">@m__mdy__m</h2>
                <!-- Bio -->
                <p data-bio  class=" text-gray-400 hidden-edit mobile:text-sm smallTb:text-base overflow-hidden whitespace-nowrap overflow-ellipsis">Greatness، of small steps!</p>
              </div>
              <div id="statusPageUser" class="flex items-center justify-start">
                ${statusUser(userStats)}
              </div>
              <div id="userInteraction" class=" border-b-4 mt-4 border-[#2f2f30] flex justify-start items-center text-white text-lg [&>*]:mx-2">
                  <div class="relative button__wrapper-profile posts activeButton">
                    <button data-action="posts" class="cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                      Posts
                    </button>
                  </div>
                  <div class="relative button__wrapper-profile likes"> 
                    <button data-action="likes" class=" cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                      Likes
                    </button> 
                  </div>
                  <div class="relative button__wrapper-profile retweets"> 
                   <button data-action="retweets" class=" cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                     Retweets
                   </button> 
                  </div>
              </div>
                  <div class="text-white flex h-auto flex-wrap justify-between items-start " id="wrapper__content-profile">
              </div>
          </div>
        </div>
    </div>
  `;
}
