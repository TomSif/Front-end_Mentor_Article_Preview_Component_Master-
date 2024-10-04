// Select Button by ID
const shareButton = document.getElementById("shareButton");

// Select menu to change the display into flex
const shareMenu = document.querySelector(".article__footer__share");

// Add and event to liste the click
shareButton.addEventListener("click", () => {
  // Toggle the display of the menu from none to flex
  if (shareMenu.style.display === "flex") {
    shareMenu.style.display = "none";
  } else {
    shareMenu.style.display = "flex";
  }

  // Toggle .active to change color of the button and arrow
  shareButton.classList.toggle("active");
});
