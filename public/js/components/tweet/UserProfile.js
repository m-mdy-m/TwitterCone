import { Profile } from "../common/Profile.js";

export function UserProfile({ username, profile, className }) {
  return `
  <div class="container__profile-users flex ">
      <div class="flex justify-center items-center absolute top-2 left-[4px]  opacity-0 user-retweeted">
          <a href="#" class="hover:underline text-[#fff] text-[8px] flex items-center">@m__mdy__m</a>
      </div>
        <img src="/assets/icon/nav/retweeted.svg" alt="" class="w-8 h-8 absolute hover:-z-10">
      <div class="bg-gradient-to-tr from-[#222224] to-[#262629] rounded-full profile-user flex justify-center items-center border border-[#403e42] shadow-lg cursor-pointer duration-100 transition-all hover:scale-105">
        ${Profile({ profile, username, className })}
      </div>
  </div>
  `;
}
