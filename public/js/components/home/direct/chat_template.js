export function chat_template({ img }) {
  return `
    <div class="pr-4 w-full h-full">
        <div class="flex flex-col h-full justify-between w-full bg-[#1110109a]  border-2 border-b-4 border-[#161617] rounded-xl">
            <div class="w-full max-h-24 h-24 p-2 origin-bottom ">
                <img src="${img}" class="object-cover w-full h-full rounded-md origin-bottom ">
            </div>
            <div class="grid grid-rows-chat_box h-full mt-1">
                <div id="chat_box" class="overflow-x-scroll font-Aktiv__regula h-96 pl-2 rounded-lg scrollbar__hidden">
                        
                </div>
                <div class="flex justify-center items-center relative ">
                    <form action="" method="post" class="flex justify-center items-center w-full h-full">
                        <button id="btn-send" class="bg-sky-400 hover:bg-sky-900 transition-all ml-2 mb-2 duration-150 px-4 py-2 h-3/4 rounded-md capitalize">send</button>
                        <textarea placeholder="What's happening?" class="bg-transparent mx-4 right-0 px-2 mb-2 rounded-md w-11/12 text-gray-300 outline-none transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none overflow-y-hidden"></textarea>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}
