import { statusUser } from "../navigation/gen/info.js";
import { navUserIcon } from "./nav/nav_profile.js";

export function ProfilePage() {
  const userStats = [
    { id: "posts", value: 0, unit: "", label: "Posts" },
    { id: "followers", value: 0, unit: "", label: "Posts" },
    { id: "following", value: 0, unit: "", label: "Posts" },
  ];
  return `
    <div class="w-full h-full grid grid-cols-profile ">
        <div class="bg-green-700 rounded-md grid grid-rows-profile">
              <div class="bg-red-700 relative">

              <div class="bg-yellow-500 absolute rounded-full p-1 border-2 border-[#434346] w-36 h-36 left-8 -bottom-12"> </div>
              </div>
              <div class="bg-blue-700 pt-12 px-4">
                    <p class="text-gray-700 cursor-default pl-4 font-Aktiv__regular">@m__mdy__m</p>
                    <p class="text-white text-lg ">'Greatness، of small steps'!</p>
                    <div class="flex items-center justify-start">
                      ${statusUser(userStats)}
                    </div>
                    <div class=" border-b-4 mt-4 border-[#2f2f30] flex justify-start items-center text-white text-lg [&>*]:mx-2">
                        <div class="relative button__wrapper-profile">
                          <button class="cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                            Posts
                          </button>
                        </div>
                        <div class="relative button__wrapper-profile"> 
                          <button class=" cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                            Likes
                          </button> 
                        </div>
                        <div class="relative button__wrapper-profile"> 
                         <button class=" cursor-pointer border-none outline-none bg-transparent uppercase transition-all duration-300 font-mavis__bold ">
                           Retweets
                         </button> 
                        </div>
                    </div>
              </div>
        </div>
        ${navUserIcon()}
    </div>
  `;
}
