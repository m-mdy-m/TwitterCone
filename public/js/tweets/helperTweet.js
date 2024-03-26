export function showUserRetweeted() {
  document.querySelectorAll(".container__profile-users").forEach((elm) => {
    const profile = elm.querySelector(".profile-user");
    const userRetweeted = elm.querySelector(".user-retweeted");

    profile.addEventListener("mouseenter", () => {
      userRetweeted.classList.remove("hiddenId");
      userRetweeted.classList.add("visibleId");
    });

    profile.addEventListener("mouseleave", () => {
      setTimeout(() => {
        userRetweeted.classList.remove("visibleId");
        userRetweeted.classList.add("hiddenId");
      }, 1500);
    });
  });
}

export function listMenuTweet() {
  document.querySelectorAll(".list__menu-tweet").forEach((icon) => {
    icon.querySelector(".bookmarkIcon").addEventListener("click", () => {
      console.log("click bookmarkIcon");
    });
    const deleteIcon = icon.querySelector(".deleteIcon");
    // console.log('bookmark=>',bookmark);
    // console.log('deleteIcon=>',deleteIcon);
  });
}
