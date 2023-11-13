const menuBtn = document.querySelector(".menu-btn");
const arrowLeft = document.querySelector(".arrow-left");
const logoIcon = document.querySelector(".logo-container");
const sidebar = document.querySelector(".hidden-sidebar");
const searchBox = document.querySelector(".search-box");
const input = document.querySelector(".search-box input");
const div = document.querySelector(".blur");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-hide");
  div.classList.toggle("show");
});

div.addEventListener("click", () => {
  sidebar.classList.toggle("show-hide");
  div.classList.toggle("show");
});

searchBox.addEventListener("click", () => {
  if (searchBox.offsetWidth < 100) {
    menuBtn.classList.add("hide");
    logoIcon.classList.add("hide");
    input.classList.add("display");
    arrowLeft.classList.add("display");
  }
});
arrowLeft.addEventListener("click", () => {
  menuBtn.classList.remove("hide");
  logoIcon.classList.remove("hide");
  input.classList.remove("display");
  arrowLeft.classList.remove("display");
});

window.addEventListener("resize", () => {
  if (nav.offsetWidth < 600) {
    input.classList.remove("display");
    arrowLeft.classList.remove("display");
    menuBtn.classList.remove("hide");
    logoIcon.classList.remove("hide");
  }
});
