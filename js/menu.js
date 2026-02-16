const toggle = document.querySelector(".nav_toggle");
const menu = document.querySelector(".nav_menu");

toggle.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});
