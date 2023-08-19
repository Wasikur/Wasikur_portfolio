// Dark Mode
var toogle_icon = document.getElementById("toggle_icon");
toogle_icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggle_icon.src = "./assets/sun.png";
  } else {
    toggle_icon.src = "./assets/moon.png";
  }
};

// Hamburher menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
