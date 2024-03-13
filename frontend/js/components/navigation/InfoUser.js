export function InfoUser(){

    return `<!-- info user -->
    <div id="userInfo" class="flex items-center justify-center mobile:mt-1 mobile:gap-0 smallTb:mt-2 smallTb:gap-2 border-b-4 border-[#2f2f30]">
        <!-- Posts -->
        <div id="posts" class="text-center text-white rounded-lg tablet:p-4 mobile:p-1 smallTb:p-2">
            <span class="header__navigation-info-user">300<i></i></span>
            <p class="header__navigation-info-user-text">Posts</p>
        </div>
        <!-- Followers -->
        <div id="followers" class="text-center text-white rounded-lg tablet:p-4 mobile:p-1 smallTb:p-2">
            <span class="header__navigation-info-user">182<i>K</i></span>
            <p class="header__navigation-info-user-text">Followers</p>
        </div>
        <!-- Following -->
        <div id="following" class="text-center text-white rounded-lg tablet:p-4 mobile:p-1 smallTb:p-2">
            <span class="header__navigation-info-user">1.04<i>M</i></span>
            <p class="header__navigation-info-user-text">Following</p>
        </div>
    </div>`
}