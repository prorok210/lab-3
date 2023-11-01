const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
function toggleMenuVisibility() {
  menuList.classList.toggle("hide");
}

const infoBtnMenu = document.querySelector("#info");
const portfolioBtnMenu = document.querySelector("#portfolio");

const info__btn = document.querySelector(".info__btn");
const info = document.querySelector(".info");
const portfolio = document.querySelector(".portfolio");
const portfolio__btn = document.querySelector(".portfolio__btn");

function info__logic1() {
  info.classList.add("hide");
  portfolio.classList.remove("hide");
  menuList.classList.add("hide");
}
function info__logic2() {
  info.classList.remove("hide");
  portfolio.classList.add("hide");
  menuList.classList.add("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);
portfolioBtnMenu.addEventListener("click", info__logic1);
infoBtnMenu.addEventListener("click", info__logic2);
info__btn.addEventListener("click", info__logic1);
portfolio__btn.addEventListener("click", info__logic2);
