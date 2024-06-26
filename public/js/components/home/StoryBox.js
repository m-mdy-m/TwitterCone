export function StoryBox(){
    return `<!-- Story Box -->
    <div class="px-2 h-full flex justify-evenly items-center flex-col">
      <!-- Animated Plus Icon -->
      <div class="bg-gradient-to-tr from-[#222224] to-[#262629] rounded-full w-16 h-16 flex justify-center items-center outline-dashed outline-[#403e42] shadow-lg  cursor-pointer duration-100 transition-all hover:scale-105 ">
        <!-- Placeholder for an icon or image -->
          <svg class="w-10 h-10 text-[#C4C4C4] animate-spin-story" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <!-- Plus icon -->
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
      </div>
      <!-- Add Story Text -->
      <h1 class="mt-1 text-sm font-mavis__bold text-white">Add Story</h1>
    </div>
    `
}