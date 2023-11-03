const menuBtn = document.querySelector(".menu-btn");
const arrowLeft = document.querySelector(".arrow-left");
const logoIcon = document.querySelector(".logo-icon");
const sidebar = document.querySelector(".hidden-sidebar");
const searchBox = document.querySelector(".search-box");
const input = document.querySelector(".search-box input");
const searchIcon = document.querySelector(".search-box .search-icon");
const div = document.querySelector(".blur");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-hide");
  div.classList.toggle("show");
});

div.addEventListener("click", () => {
  sidebar.classList.toggle("show-hide");
  div.classList.toggle("show");
});
searchIcon.addEventListener("click", () => {
  menuBtn.classList.add("hide");
  logoIcon.classList.add("hide");
  input.classList.add("display");
  arrowLeft.classList.add("display");
});
arrowLeft.addEventListener("click", () => {
  menuBtn.classList.remove("hide");
  logoIcon.classList.remove("hide");
  input.classList.remove("display");
  arrowLeft.classList.remove("display");
});
function reportWindowSize() {
  if (window.innerWidth > 650) {
    arrowLeft.classList.remove("display");
    menuBtn.classList.remove("hide");
    logoIcon.classList.remove("hide");
  }
  if (window.innerWidth < 600) {
    input.classList.remove("display");
  }
}

window.onresize = reportWindowSize;
