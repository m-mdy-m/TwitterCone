import { ContentSection } from "../home/Content.js";
export function HOME() {
  return `
    <div class="flex flex-col justify-start items-stretch" id="content_section-main">
        ${ContentSection()}
    </div>
    <!-- Wrapper Directs -->
    <div class="border-l border-[#28282a] flex justify-start flex-col wrapper_directs">
    </div>
    `;
}
