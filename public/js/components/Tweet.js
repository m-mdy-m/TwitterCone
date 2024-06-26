import { UserInfo } from "./tweet/Userinfo.js";
import { PostContent } from "./tweet/PostContent.js";
import { ActionButtons } from "./tweet/Action.btn.js";

function Tweet({
  username,
  content,
  profile,
  createdAt,
  id,
  retweetCount,
  likeCount,
  srcLikeIcon,
  srcRetweetIcon,
  retweetedUsername,
  isRetweeted,
  isBookmarked,
  bookmarkIcon,
  showDeleteIcon,
  edited_tweet,
  followStatus,
  content_follow_user,
  showEditICon
}) {
  return `
    <div class="max-w-full min-h-20 h-auto my-4 rounded-lg relative flex flex-col border-2 bg-[#11101076] border-t border-[#111010] px-3 pt-6" data-id="${id}">
      <!-- Bookmarked Tweet  -->
      <svg class="bookmarked w-4 h-4 top-1 left-1 ${isBookmarked} absolute text-blue-400 transition-colors duration-300 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.75V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V7.75H4ZM4 6.25H20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V6.25Z" fill="currentColor"/>
      </svg>
      <div class="flex justify-between items-center">
        ${UserInfo({
          username,
          profile,
          createdAt,
          isRetweeted,
          retweetedUsername,
          followStatus,
          content_follow_user,
        })}
        <div class="flex justify-center items-center  list__menu-icon w-8 h-8 transition-transform cursor-pointer relative transform hover:scale-110">
           <div class="list__menu-tweet cursor-default [&>*]:opacity-0 [&>*]:cursor-pointer [&>*]:mx-0.5 flex justify-center bg-gray-800 px-4 absolute right-0 -z-10 p-1 rounded-r-md rounded-l-xl transition-all">
              <!-- Delete tweet icon -->
              <svg class="deleteIcon ${showDeleteIcon} w-6 h-6 text-gray-400 hover:text-red-500 transition-colors duration-300 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.40627 2.8906C9.7772 2.3342 10.4017 2 11.0704 2H12.9296C13.5983 2 14.2228 2.3342 14.5937 2.8906L15.5 4.25H19.25C19.6642 4.25 20 4.58579 20 5C20 5.41421 19.6642 5.75 19.25 5.75H4.75C4.33579 5.75 4 5.41421 4 5C4 4.58579 4.33579 4.25 4.75 4.25H8.5L9.40627 2.8906ZM15 22H9C6.79086 22 5 20.2091 5 18V7H19V18C19 20.2091 17.2091 22 15 22ZM10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V18C10.75 18.4142 10.4142 18.75 10 18.75C9.58579 18.75 9.25 18.4142 9.25 18L9.25 11C9.25 10.5858 9.58579 10.25 10 10.25ZM14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V18C14.75 18.4142 14.4142 18.75 14 18.75C13.5858 18.75 13.25 18.4142 13.25 18V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="currentColor"/>
              </svg>
              <!-- Bookmark Icon -->
              <svg class="bookmarkIcon w-6 h-6 ${bookmarkIcon}  transition-colors duration-300 ease-in-out" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.75V18C4 19.6481 5.88153 20.5889 7.2 19.6L10.8 16.9C11.5111 16.3667 12.4889 16.3667 13.2 16.9L16.8 19.6C18.1185 20.5889 20 19.6481 20 18V7.75H4ZM4 6.25H20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V6.25Z" fill="currentColor"/>
              </svg>
              <!-- Edit Icon -->
              <svg class="editIcon w-6 h-6 ${showEditICon} fill-current text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out transform cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0711 4.59512C17.9827 3.50676 16.2181 3.50676 15.1298 4.59512L14.0201 5.70482L17.9751 9.65979L19.0848 8.55008C20.1732 7.46172 20.1732 5.69717 19.0711 4.59512ZM16.6062 11.0022L13.6521 7.04815L4.66795 16.0344C4.10741 16.5949 3.72903 17.311 3.58079 18.0898L3.15657 20.3182C3.02461 21.0114 3.63276 21.6196 4.32595 21.4877L6.55442 21.0635C7.33316 20.9152 8.04933 20.5362 8.60987 19.9757L16.6062 11.0022Z" fill="currentColor"/>
              </svg>
           </div>
          <svg class="hover:animate-pulse list__menu-icon-svg"  width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.25C5.5 12.9404 6.05964 13.5 6.75 13.5C7.44036 13.5 8 12.9404 8 12.25C8 11.5596 7.44036 11 6.75 11C6.05964 11 5.5 11.5596 5.5 12.25ZM11.75 13.5C11.0596 13.5 10.5 12.9404 10.5 12.25C10.5 11.5596 11.0596 11 11.75 11C12.4404 11 13 11.5596 13 12.25C13 12.9404 12.4404 13.5 11.75 13.5ZM16.75 13.5C16.0596 13.5 15.5 12.9404 15.5 12.25C15.5 11.5596 16.0596 11 16.75 11C17.4404 11 18 11.5596 18 12.25C18 12.9404 17.4404 13.5 16.75 13.5Z" fill="#e3e3e3"/>
          </svg>
        </div>
      </div>
      <div class="min-h-auto max-w-full flex justify-center items-start flex-col pb-3 pr-2 relative">
      ${PostContent({ content })}
      ${ActionButtons({ likeCount, retweetCount, srcLikeIcon, srcRetweetIcon,edited_tweet })}
      </div>
    </div>
  `;
}

export default Tweet;
