// Navigation
const navMenu = document.querySelector(".header__menu");
const navToggle = document.querySelector(".header__toggle");
const navClose = document.querySelector(".header__menu--close");

// Menu Show

function navShowButton() {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("block");
}

function navCloseButton() {
  navMenu.classList.remove("block");
  navMenu.classList.add("hidden");
}

if (navToggle) {
  navToggle.addEventListener("click", navShowButton);
}

if (navClose) {
  navClose.addEventListener("click", navCloseButton);
}
