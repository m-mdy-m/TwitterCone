import { ContentSection } from "../home/Content.js";

export function HOME({ username, profilePic, profileStory }) {
  return `
    <!-- Feather -->
      <div class="fixed right-8 bottom-8 z-20 bg-gradient-to-br from-blue-500 to-blue-700 bg-blur-md cursor-pointer p-2 rounded-full transition duration-300 transform hover:scale-110">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Feather shape -->
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9813 4.0651C22.151 2.85824 21.141 1.849 19.9342 2.0187C13.0461 2.98731 7.59633 8.43705 6.62773 15.3252C6.5831 15.6426 6.62001 15.9464 6.72061 16.2186C6.72061 16.2186 6.72061 16.2187 6.72062 16.2187L1.46967 21.4696C1.17678 21.7625 1.17678 22.2374 1.46967 22.5303C1.76256 22.8231 2.23744 22.8231 2.53033 22.5303L7.78115 17.2794C8.05326 17.38 8.35686 17.4169 8.67411 17.3723C11.2473 17.0106 13.6198 16.0235 15.6329 14.5697C16.0381 14.2771 16.262 13.8 16.262 13.3002C16.262 12.3905 16.9995 11.653 17.9092 11.653C18.409 11.653 18.8861 11.4291 19.1787 11.0239C20.6325 9.01079 21.6196 6.6383 21.9813 4.0651ZM6.72062 16.2187C6.902 16.7095 7.29037 17.098 7.78115 17.2794V17.2794L12.5976 12.4629C12.8905 12.1701 12.8905 11.6952 12.5976 11.4023C12.3047 11.1094 11.8299 11.1094 11.537 11.4023L6.72062 16.2187Z" fill="url(#paint0_linear)"/>
            
            <!-- Gradient definition -->
            <defs>
                <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1DA1F2"/>
                    <stop offset="1" stop-color="#1A91DA"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
    <div class="flex flex-col justify-start items-stretch">
        ${ContentSection({ profilePic, username, profileStory })}
    </div>
    <!-- Wrapper Directs -->
    <div class="border-l border-[#28282a]"></div>
    `;
}
